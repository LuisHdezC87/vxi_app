class AddEducationLevelRefToContact < ActiveRecord::Migration[5.2]
  def change
    add_reference :contacts, :education_level, foreign_key: true
  end
end
