class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  before_action :authorize

  private 

  def authorize
    @current_user = Driver.find(session[:driver_id])
    render json: {errors: "Not authorized"}, status: unauthorized unless @current_user
  end


end
