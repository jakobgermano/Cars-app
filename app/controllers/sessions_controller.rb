class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    #login #logout

    def create
        driver = Driver.find_by(username: params[:username])
        session[:driver_id] = driver.id
        render json: driver
    end

    def destroy
        session.delete :driver_id
       
    end
end