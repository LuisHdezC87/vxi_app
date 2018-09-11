class ContactsController < ApplicationController

  def new
    @contact = Contact.new
    @sites = VxiSite.all
    @edu_levels = EducationLevel.all
    @experience = JobExperience.where(position: 'call center')
    @positions = JobPosition.all
  end

  def create
    @contact = Contact.new(allowed_params)
    #response = RestClient.post(api_url, body(@contact), headers)
    #success_response = JSON.parse(response.body)['pin'].length > 0 rescue false 
    #if response.code == 200 && success_response
      redirect_to root_path
    #end
  end

  private

  def allowed_params
    params.require(:contact).permit(:first_name, :last_name, :email, :contact_number)
  end

  def headers
    {
      content_type:"application/json;", 
      cache_control: "no-cache" 
    } 
  end

  def api_url
    CREDENTIALS['api_url'].gsub('campaign_id', CREDENTIALS['campaign_id'].to_s) rescue ''
  end

  def authorization_credentials
    {
      api_key: CREDENTIALS['api_key'],
      api_secret: CREDENTIALS['api_secret']
    }
  end

  def body(contact)
    authorization_credentials.merge({campaign_invitation: contact.to_json}) 
  end

end
