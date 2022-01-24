class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private 

  def authorize 
    @current_user = Driver.find(session[:driver_id])
    render json: {errors: "Not authorized"} unless @current_user
  end

end
