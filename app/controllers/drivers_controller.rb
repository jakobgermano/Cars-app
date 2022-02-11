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
            if driver.valid? 
            render json: driver
        end
    end
    
    def destroy
        driver = Driver.find(driver_params)
        driver.destroy
    end

    private

    def driver_params
        params.require(:driver).permit(:username, :password)
    end

end
