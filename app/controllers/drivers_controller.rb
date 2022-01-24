class DriversController < ApplicationController
    skip_before_action :authorize
    #, only: :create

    def index
        drivers = Driver.all
        render json: drivers 
    end

    def show
        driver = Driver.find(params[:id])
        render json: driver
    end

    def create
        driver = Driver.create(driver_params)
        render json: driver, status: created
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
