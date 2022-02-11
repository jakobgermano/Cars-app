class DriverSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :vehicles, serializer: VehicleSerializer
end
