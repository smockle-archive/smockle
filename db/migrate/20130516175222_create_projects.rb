class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.string :quote
      t.text :description
      t.integer :offset_x
      t.integer :offset_y
      t.string :link

      t.timestamps
    end
  end
end
