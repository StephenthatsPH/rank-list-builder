class CreateRanklists < ActiveRecord::Migration[7.0]
  def change
    create_table :ranklists do |t|
      t.integer :geographic
      t.integer :goodfit
      t.integer :reputation
      t.integer :personalities
      t.integer :qol
      t.integer :edu_training
      t.text :comment
      t.integer :user_id

      t.timestamps
    end
  end
end
