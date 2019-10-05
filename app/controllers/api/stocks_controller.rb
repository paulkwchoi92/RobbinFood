class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(symbol: params[:id])
    # debugger
    # debugger
    if @stock
      # render json: "api/stocks/show"
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
