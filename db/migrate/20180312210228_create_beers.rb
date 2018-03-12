class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.integer :ibu
      t.float :abv

      t.timestamps
    end
  end
end
