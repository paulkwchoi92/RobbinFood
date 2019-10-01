class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(id: params[:id])
    # debugger
    if @stock
      render json: @stock
    else
      render json: {}, status: :not_found
    end
  end

  def index
    @stocks = Stock.all 
    # debugger
    # puts(@stocks)
    render "api/stocks/index"
  end
  private


end 
