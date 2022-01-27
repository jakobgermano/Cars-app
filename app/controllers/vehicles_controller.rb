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

    def updated
        vehicle = Vehicle.update(vehicle_params)
        render json: vehicle
    end

    def destroy
        vehicle = Vehicle.find(vehicle_params)
        vehicle.destroy
    end

    private

    def vehicle_params
        params.permit(:name, :year, :driver_id)
    end

end
