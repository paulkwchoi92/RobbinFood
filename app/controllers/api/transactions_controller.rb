class Api::TransactionsController < ApplicationController 
  def create
    @transaction = Transaction.new(transaction_params)
    @user = User.find(@transaction.user_id)
    total_price = @transaction.stock_price * @trasnaction.num_shares
    if @transaction.transaction_type == "purchase"
      if @user.portfolio_value < total_price 
        render json: ["Insufficient Funds"]
      else
        @user.buying_power -= total_price 
      end
    elsif @transaction.transaction_type == "sale"
      if @user.num_share