class ApplicationController < ActionController::API
  include ActionController::Cookies

#rescue_from ActiveRecord::RecordNotFound, with: :render_unprocessable_entity_response

before_action :authorize

  private 
  
  # def render_unprocessable_entity_response(exception)
  #     render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  #     end

  def authorize
    @current_user = Driver.find(session[:driver_id])
    render json: {errors: "Not authorized"}, status: unauthorized unless @current_user
  end


end
