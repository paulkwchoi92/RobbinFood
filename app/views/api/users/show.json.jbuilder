# json.partial! "api/users/user", { user: @user, watchlists: @watchlists }
# debugger

json.set! :user do
  json.set! :user, @user 
  json.set! :watchlists, @watchlists
  json.set! :ownedStocks, @ownedStocks
end

# @user.each do |user|
#   json.set! user: do 
#     json.extract! 