class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :client
      t.string :name
      t.string :name_es
      t.string :quote
      t.string :quote_es
      t.text :message
      t.text :message_es

      t.timestamps
    end
  end
end
