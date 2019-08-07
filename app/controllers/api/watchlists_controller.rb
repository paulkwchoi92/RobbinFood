class Api::WatchlistsController < ApplicationController
  def create
    @watchlist = Watchlist.new(watchlist_params)
    if @watchlist.save 
      render :show 
    else 
      render json: @watchlist.errors.full_messages, status: "invalid watchlist"
    end 
  end 

  def destroy
    @watchlist = Watchlist.find(watchlist_params)
    if @watchlist 
      @watchlist.delete
      render json: {id: @watchlist.id}
    else 
      render json: {} status: "notfound"
    end
  end

  private

  def watchlist_params 
    params.require(:watchlist).permit(:user_id, :symbol)
  end
end