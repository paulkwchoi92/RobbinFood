class Api::UsersController < ApplicationController
    def new
    @user = User.new
    render :new
  end
#\
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      login(@user)
      @watchlists = @user.watchlists
      @ownedStocks = @user.owned_stocks
      @transactions = @user.transactions

    render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def index
    @users = User.all
    render json: @users
  end

 

  private

  def user_params
    # params.require(:user).permit(:email, :email)
    # Add password
    params.require(:user).permit(
      :email, 
      :password, 
      :first_name,
      :last_name,
      :dob)
  end

end
