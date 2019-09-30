# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





  Stock.destroy_all
  User.destroy_all
  Transaction.destroy_all
  User.create!(email: "demo@demo.com", password:"longpassword", first_name: "Demo", last_name:"user")
  
  

  File.open("entry_data.txt").each do |line|
    stock = JSON.parse(line)
    stock["employees"] = stock["employees"].delete(",").to_i if stock["employees"]
    Stock.create(stock)
  end

  Transaction.create!(user_id:1, symbol:"AAPL", transaction_type:"buy", stock_price:202.39, num_shares:30)
  Transaction.create!(user_id:1, symbol:"AAPL", transaction_type:"sell", stock_price:202.39, num_shares:22)
  Transaction.create!(user_id:1, symbol:"AAPL", transaction_type:"buy", stock_price:202.39, num_shares:48)
  Transaction.create!(user_id:1, symbol:"TWTR", transaction_type:"buy", stock_price:202.39, num_shares:15)
  Transaction.create!(user_id:1, symbol:"TSLA", transaction_type:"buy", stock_price:202.39, num_shares:15)
  Transaction.create!(user_id:1, symbol:"NFLX", transaction_type:"buy", stock_price:202.39, num_shares:13)
  Transaction.create!(user_id:1, symbol:"FB", transaction_type:"buy", stock_price:189.44, num_shares:22)
  Transaction.create!(user_id:1, symbol:"MSFT", transaction_type:"buy", stock_price:138.16, num_shares:30)
  Transaction.create!(user_id:1, symbol:"DIS", transaction_type:"buy", stock_price:137.73, num_shares:30)
  Transaction.create!(user_id:1, symbol:"SBUX", transaction_type:"buy", stock_price:96.12, num_shares:30)
  Transaction.create!(user_id:1, symbol:"GPRO", transaction_type:"buy", stock_price:4.39, num_shares:30)
 
  Watchlist.create!(user_id:1, symbol:"AAPL")
  Watchlist.create!(user_id:1, symbol:"TWTR")
  Watchlist.create!(user_id:1, symbol:"TSLA")
  Watchlist.create!(user_id:1, symbol:"NFLX")
  Watchlist.create!(user_id:1, symbol:"FB" )
  Watchlist.create!(user_id:1, symbol:"MSFT")
  Watchlist.create!(user_id:1, symbol:"DIS" )
  Watchlist.create!(user_id:1, symbol:"SBUX")
  Watchlist.create!(user_id:1, symbol:"GPRO")
