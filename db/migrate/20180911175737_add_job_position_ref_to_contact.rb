class AddJobPositionRefToContact < ActiveRecord::Migration[5.2]
  def change
    add_reference :contacts, :job_position, foreign_key: true
  end
end
