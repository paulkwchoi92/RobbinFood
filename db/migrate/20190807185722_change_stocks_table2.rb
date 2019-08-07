class ChangeStocksTable2 < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :hq, :headquarters
  end
end
