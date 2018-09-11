class CreateJobPositions < ActiveRecord::Migration[5.2]
  def change
    create_table :job_positions do |t|
      t.string :position_name

      t.timestamps
    end
  end
end
