begin
  CREDENTIALS = Rails.application.config_for(:talkpush_api_credentials)
rescue
    CREDENTIALS = []
end
