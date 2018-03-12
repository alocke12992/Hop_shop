class CreateBeers < ActiveRecord::Migration[5.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :style
      t.string :ibu
      t.string :abv

      t.timestamps
    end
  end
end
