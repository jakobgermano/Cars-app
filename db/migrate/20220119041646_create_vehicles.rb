class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :name
      t.integer :year
      t.belongs_to :driver, null:false, foreign_key:true

      t.timestamps
    end
  end
end
