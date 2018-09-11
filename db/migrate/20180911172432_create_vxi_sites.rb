class CreateVxiSites < ActiveRecord::Migration[5.2]
  def change
    create_table :vxi_sites do |t|
      t.string :site_name

      t.timestamps
    end
  end
end
