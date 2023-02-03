class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :header
      t.string :image
      t.integer :category_id
      t.integer :owner_id
      

      t.timestamps
    end
  end
end
