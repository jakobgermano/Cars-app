class DriverSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :vehicles, serializer: VehicleSerializer
end
