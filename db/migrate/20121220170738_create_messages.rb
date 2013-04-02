class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :first
      t.string :last
      t.string :organization
      t.string :email
      t.string :phone
      t.references :reason
      t.text :message

      t.timestamps
    end
    add_index :messages, :reason_id
  end
end
