class Api::WatchlistsController < ApplicationController
  def create
    # debugger
    @watchlist = Watchlist.new(watchlist_params)
    # debugger
    if @watchlist.save 
      render json: @watchlist
    else 
      render json: @watchlist.errors.full_messages, status: "invalid watchlist"
    end 
  end 

  def destroy
    # debugger
    @watchlist = Watchlist.find( params[:id])
    # debugger
    if @watchlist 
      @watchlist.delete
      render json: {id: @watchlist.id}
    else 
      render json: {}, status: "notfound"
    end
  end

  private

  def watchlist_params 
    params.require(:watchlist).permit(:user_id, :symbol)
  end
end

