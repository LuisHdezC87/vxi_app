class AddJobExperienceRefToContact < ActiveRecord::Migration[5.2]
  def change
    add_reference :contacts, :job_experience, foreign_key: true
  end
end
