class DriversController < ApplicationController

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
