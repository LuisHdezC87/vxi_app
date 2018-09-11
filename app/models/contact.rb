class Contact < ApplicationRecord

  belongs_to :vxi_site
  belongs_to :job_experience
  belongs_to :education_level
  belongs_to :position
 
  def to_json
    {
      first_name: first_name.to_s,
      last_name: last_name.to_s,
      email: email.to_s,
      user_phone_number: contact_number.to_s
    }
  end
end
