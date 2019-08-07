class ChangeStocksTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :stocks, :num_of_emps, :employees
  end
end
