class Drivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :username
      t.string :password_digest
    end
  end
end
