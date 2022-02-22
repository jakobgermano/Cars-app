class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    #login #logout

    def create
        driver = Driver.find_by(username: params[:username])
        if (driver&.authenticate(params[:password]))
            session[:driver_id] = driver.id
            render json: driver, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    def destroy
        session.delete :driver_id
        head :no_content
       
    end
end