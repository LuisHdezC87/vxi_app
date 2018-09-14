module ApplicationHelper

  def get_email_contact_vxi
    CREDENTIALS['email'] rescue ''
  end

  def get_phone_vxi
     CREDENTIALS['phone'] rescue ''
  end

end
