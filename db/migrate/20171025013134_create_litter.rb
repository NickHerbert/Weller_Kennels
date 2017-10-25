class CreateLitter < ActiveRecord::Migration[5.0]
  def change
    create_table :litters do |t|
      t.integer :dam
      t.integer :sire
      t.datetime :due_date

      t.datetime :date_available
      t.decimal :deposit_amount
      t.decimal :puppy_price
      t.integer :dog_id

    end
  end
end
