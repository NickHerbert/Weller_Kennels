class CreateDogs < ActiveRecord::Migration[5.0]
  def change
    create_table :dogs do |t|
      t.string   :full_name
      t.string   :nickname
      t.datetime :birthday,     default: Time.now
      t.datetime :passed_away,  default: nil
      t.string   :breed,        null:false
      t.string   :sex,          null:false


      t.integer :parent_id, :null => true, :index => true
      t.integer :lft, :null => false, :index => true
      t.integer :rgt, :null => false, :index => true

      # optional fields
      t.integer :depth, :null => false, :default => 0
      t.integer :children_count, :null => false, :default => 0

      t.attachment :avatar

      t.timestamps
    end
    add_index :dogs,[:nickname,:rgt,:lft,:parent_id]
  end
end
