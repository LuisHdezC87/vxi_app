module ContactsHelper

  def get_imgs_helper
    url = Rails.root.join('app/assets/images/background/')
    Dir.glob( url + '*.*').map{|img| img.split('/background/').last.split('.').first}
  end

  def get_email_contact_vxi
    CREDENTIALS['email'] rescue ''
  end

  def get_phone_vxi
     CREDENTIALS['phone'] rescue ''
  end

end
