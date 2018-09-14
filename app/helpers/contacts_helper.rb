module ContactsHelper

  def get_imgs_helper
    url = Rails.root.join('app/assets/images/background/')
    Dir.glob( url + '*.*').map{|img| img.split('/background/').last.split('.').first}
  end

end
