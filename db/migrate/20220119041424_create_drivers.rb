class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :username
      t.string :password_digest
      t.integer :age

      t.timestamps
    end
  end
end
