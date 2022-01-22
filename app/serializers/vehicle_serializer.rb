class VehicleSerializer < ActiveModel::Serializer
  attributes :id, :name, :year, :driver_id
end
