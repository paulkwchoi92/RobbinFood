require 'rest-client'

class Api::StocksController < ApplicationController
  def show
    @stock = Stock.find_by(symbol: params[:id])
    symbol = params[:id]
    today = Date.today.strftime("%Y-%m-%d") 
    three_month_time = (Date.today - 90).strftime("%Y-%m-%d") 
    year_time = (Date.today - 365).strftime("%Y-%m-%d") 
    five_year_time = (Date.today - 1825).strftime("%Y-%m-%d") 
    stock_trade_info_url = "https://api.worldtradingdata.com/api/v1/stock?symbol=#{symbol}&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    daycharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=1&interval=1&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    weekcharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=7&interval=5&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    monthcharturl = "https://intraday.worldtradingdata.com/api/v1/intraday?symbol=#{symbol}&range=30&interval=5&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    threemonthurl ="https://api.worldtradingdata.com/api/v1/history?symbol=#{symbol}&date_from=#{three_month_time}&date_to=#{today}&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    oneyearurl = "https://api.worldtradingdata.com/api/v1/history?symbol=#{symbol}&date_from=#{year_time}&date_to=#{today}&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    fiveryearurl = "https://api.worldtradingdata.com/api/v1/history?symbol=#{symbol}&date_from=#{five_year_time}&date_to=#{today}&sort=asc&api_token=zWGOqwDCoe0BBKe3FN1SM3x1ahCMbEs47EywsN8rpHTEByE7dMrezhsqBv4A"
    @stockinfo = JSON.parse(RestClient.get(stock_trade_info_url))
    @singleDay = JSON.parse(RestClient.get(daycharturl))
    @oneweek = JSON.parse(RestClient.get(weekcharturl))
    @month = JSON.parse(RestClient.get(monthcharturl))
    @threemonth = JSON.parse(RestClient.get(threemonthurl))
    @year = JSON.parse(RestClient.get(oneyearurl))
    @fiveyear = JSON.parse(RestClient.get(fiveryearurl))
    if (@singleDay && 
        @stock && 
        @oneweek && 
        @month && 
        @threemonth && 
        @year && 
        @fiveyear )
      render json: {stock: @stock, 
        charts: {oneday: @singleDay, 
          oneweek: @oneweek, 
          onemonth: @month, 
          threemonths: @threemonth, 
          oneyear: @year, 
          fiveyears: @fiveyear}, 
        stockinfo: @stockinfo}

        
    # if @stock 
    #   render json: {stock: @stock, singleDay: @singleDay}
    else
      render json: {}, status: :not_found
    end
  end

  def index
    @stocks = Stock.all 

    # puts(@stocks)
    render "api/stocks/index"
  end
  private


end 
