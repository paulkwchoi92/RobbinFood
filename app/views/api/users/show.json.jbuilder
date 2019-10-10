# json.partial! "api/users/user", { user: @user, watchlists: @watchlists }

json.set! :user do
  json.set! :user, @user 
  json.set! :watchlists, @watchlists
  json.set! :ownedStocks, @ownedStocks
  json.set! :transactions, @transactions
end

# @user.each do |user|
#   json.set! user: do 
#     json.extract! 