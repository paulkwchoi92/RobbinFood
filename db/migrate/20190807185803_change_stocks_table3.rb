class ChangeStocksTable3 < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :div_yield, :dividend_yield
  end
end
