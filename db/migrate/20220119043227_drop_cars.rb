class DropCars < ActiveRecord::Migration[6.1]
  def change
    drop_table :cars, force: :cascade
    drop_table :owners, force: :cascade
  end
end
