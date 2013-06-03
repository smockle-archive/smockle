class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :name
      t.string :client
      t.string :quote
      t.text :description
      t.string :link

      t.timestamps
    end
  end
end
