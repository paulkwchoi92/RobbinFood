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
