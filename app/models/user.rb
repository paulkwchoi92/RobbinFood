require 'rest-client'

class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates  :first_name, :last_name,  presence: true 

  attr_reader :password 
  
  has_many :transactions
  has_many :watchlists

  after_initialize :ensure_session_token , :ensure_portfolio_value, :ensure_buying_power

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email) 
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save! 
    self.session_token 
  end

  def owned_stocks #for owned stocks table, calcuating portfolio value #question how to use this
    owned_stocks = Hash.new(0)
    self.transactions.all.each do |transaction|
      if transaction.transaction_type == "buy"
        owned_stocks[transaction.symbol] += transaction.num_shares
      else
        owned_stocks[transaction.symbol] -= transaction.num_shares
      end
    end
    return owned_stocks 

  end

  def update_portfolio_value
    symbols = self.owned_stocks.keys
    request = "https://cloud.iexapis.com/"
    response = RestClient.get(request)
    JSON.parse(response)
  end

  def get_watchlist_display 
    owned_stocks_arr = self.owned_stocks.keys 
    watchlists_arr = []
    watchlists_hash = {}
    filtered_watchlists =self.watchlists.each do |watch|
      watchlists_arr.push(watch.symbol) if !owned_stocks_arr.include?(watch.symbol)
    end
    owned_stocks_display = owned_stocks_arr.map do |ele| 
        daycharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{ele}&range=1&interval=1&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
        singleDay = JSON.parse(RestClient.get(daycharturl))
        ele = singleDay
    end
    watchlists_hash["owned"] = owned_stocks_display
    watchlists_hash["watch"] = watchlists_arr

    watchlists_hash
  end
  
#  export const createProfileCharts = (transactions, charts) => {
#   //we reverse to line the charts up. Not all charts have 5 years of data, but all have data starting from now going back
#   Object.keys(charts).forEach(symbol => charts[symbol].reverse());
#   const baseChart = createBlankChart(charts["AAPL"]); //We ensure that we always have the apple chart and we know it goes back the full five years
#   baseChart.forEach((day, i) => {
#     const numSharesOnDay = countStocks(transactions, day.date); //how many and which stocks did the user have on this day?
#     Object.keys(numSharesOnDay).forEach(symbol => {
#       const dayPrice = charts[symbol][i];
#       const numShares = numSharesOnDay[symbol];
#       day.open += dayPrice.open * numShares;
#       day.close += dayPrice.close * numShares;
#     });
#   });
#   return createDateRangeCharts(baseChart.reverse());
# };

#   def create_profile_charts(transactions, charts)
    
#   end

  def create_blank_chart(chart, date)
    char.each do |ele| 
      ele.close = 0
      ele.open = 0
      ele.date = new Date(today)
    end
  end
  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def ensure_portfolio_value
    self.portfolio_value ||= self.buying_power
  end
  def ensure_buying_power
    self.buying_power ||= 100000
  
  end
end
