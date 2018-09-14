class CatchAllController < ApplicationController
  def index
     render text: request.url
  end
end
