class VehiclesController < ApplicationController
    skip_before_action :authorize 
    def index
        vehicles = Vehicle.all
        render json: vehicles 
    end
    
    def create
        vehicle = Vehicle.create(vehicle_params)
        render json: vehicle
    end

    def update
        vehicle = Vehicle.find(params[:id])
        vehicle.update(vehicle_params)
        render json: vehicle
    end

    def destroy
        vehicle = Vehicle.find(params[:id])
        vehicle.destroy
    end

    def show
        vehicle = Vehicle.find(params[:id])
        render json: vehicle
    end


    private

    def vehicle_params
        params.require(:vehicle).permit(:name, :year, :driver_id )
    end

end
