class EditUsersTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :portfolio_value, :buying_power
  end
end
