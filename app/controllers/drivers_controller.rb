class DriversController < ApplicationController
    skip_before_action :authorize, only: :create

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
            session[:driver_id] = driver.id
            render json: driver, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
    # def destroy
    #     driver = Driver.find(driver_params)
    #     driver.destroy
    # end

    private

    def driver_params
        params.require(:driver).permit(:username, :password)
    end

end
