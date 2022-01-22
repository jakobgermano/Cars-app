class SessionsController < ApplicationController
    #login #logout

    def create
        driver = Driver.find_by(username: params[:username]
        session[:driver_id] = driver.id
        render json: driver
    end

    def destroy
        session.delete :driver_id
        head :no_content
    end
end