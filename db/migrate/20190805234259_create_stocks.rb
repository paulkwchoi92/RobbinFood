class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.string :description
      t.string :ceo 
      t.integer :num_of_emps
      t.string :hq
      t.integer :founded
      t.float :div_yield
      t.timestamps
    end
    add_index :stocks, :name
    add_index :stocks, :symbol, unique: true
  end
end
