# json.partial! "api/users/user", { user: @user, watchlists: @watchlists }
# debugger

json.set! :user do
  json.set! :user, @user 
  json.set! :watchlists, @watchlists
end

# @user.each do |user|
#   json.set! user: do 
#     json.extract! 