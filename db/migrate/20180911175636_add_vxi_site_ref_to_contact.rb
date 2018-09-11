class AddVxiSiteRefToContact < ActiveRecord::Migration[5.2]
  def change
    add_reference :contacts, :vxi_site, foreign_key: true
  end
end
