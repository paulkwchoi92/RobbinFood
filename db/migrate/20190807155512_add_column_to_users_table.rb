class AddColumnToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :portfolio_value, :float
  end
end
