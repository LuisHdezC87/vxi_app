class CreateJobExperiences < ActiveRecord::Migration[5.2]
  def change
    create_table :job_experiences do |t|
      t.string :position
      t.string :experience

      t.timestamps
    end
  end
end
