class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :header
      t.string :points
      t.string :image

      t.timestamps
    end
  end
end
