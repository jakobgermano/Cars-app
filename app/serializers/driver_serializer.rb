class DriverSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :age
  has_many :vehicles, serializer: VehicleSerializer
end
