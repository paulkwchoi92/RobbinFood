class Api::TransactionsController < ApplicationController 
  def create
    @transaction = Transaction.new(transaction_params)
    @user = user.find(current_user.id)
    total_sum = @transaction.stock_price * @transaction.num_shares
    if @transaction.transaction_type == "buy"
      if @user.buying_power > total_sum
        @user.buying_power -= total_sum 
        @transaction.save!
        render :show
      else
        render json: "insufficient funds"
      end
    end
  end

  private 

  def transaction_params
    params.require(:transaction).permit(:user_id, 
      :symbol, 
      :transaction_type, 
      :stock_price, 
      :num_shares)
  end
 end