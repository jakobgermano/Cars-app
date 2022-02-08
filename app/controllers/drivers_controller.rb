class DriversController < ApplicationController
    skip_before_action :authorize, only: :create
    #, only: :create

    def index
        drivers = Driver.all
        render json: drivers 
    end

    def show
        render json: @current_user
    end

    def create
        driver = Driver.create(driver_params)
        session[:driver_id] = driver.id
        render json: driver
    end
    
    def destroy
        driver = Driver.find(driver_params)
        driver.destroy
    end

    private

    def driver_params
        params.permit(:username, :password, :name, :age)
    end

end
