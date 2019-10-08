require 'rest-client'

class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(symbol: params[:id])
    symbol = params[:id]
    # debugger
    # daycharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=1&interval=1&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
        # weekcharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=7&interval=5&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    # monthcharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=30&interval=5&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"

    # @singleDay = RestClient.get(daycharturl)
    # if @singleDay && @stock
    #   render json: {stock: @stock, singleDay: @singleDay}
    if @stock 
      render json: {stock: @stock, singleDay: @singleDay}
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
