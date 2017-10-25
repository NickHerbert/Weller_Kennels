class CreateDogsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :dogs_users do |t|
      t.belongs_to :dog, index: true
      t.belongs_to :user, index: true
    end
  end
end
