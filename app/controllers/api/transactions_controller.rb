class Api::TransactionsController < ApplicationController 
  def create
    @transaction = Transaction.new(transaction_params)
    @user = User.find(@transaction.user_id);
    dollar_amount = @transaction.stock_price * @transaction.num_shares
    if @transaction.transaction_type == "buy"
      if @user.buying_power < dollar_amount
        render json: ["Not enough buying power"], status: :unprocessable_entity
        return
      else
        @transaction.save
        @user.buying_power -= dollar_amount
      end
    elsif @transaction.transaction_type == "sell"
     
      @transaction.save
        @user.buying_power += dollar_amount
    end
    @user.save!
    if @transaction.save
      render "api/transactions/show"
    else
      render json: @transaction.errors.full_messages, status: :unprocessable_entity
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