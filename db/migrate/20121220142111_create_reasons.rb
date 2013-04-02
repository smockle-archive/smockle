class CreateReasons < ActiveRecord::Migration
  def change
    create_table :reasons do |t|
      t.string :reason
      t.string :reason_es

      t.timestamps
    end
  end
end
