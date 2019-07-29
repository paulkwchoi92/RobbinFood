class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :email, null: false, unique: true 
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :dob, null: false 
      t.float :portfolio_value, null: false, :default => 100000.00

      t.timestamps
    end
  end
end
