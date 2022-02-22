class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :driver_id
  belongs_to :driver, serializer: DriverSerializer
end
