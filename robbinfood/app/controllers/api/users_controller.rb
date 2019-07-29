class Api::UsersController < ApplicationController
    def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render json: 'Creation Successful'
    else
      render json: 'Failed'
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
      :username,
      :first_name,
      :last_name,
      :dob,
      :portfolio_value)
  end

end
