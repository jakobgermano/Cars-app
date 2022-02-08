class Driver < ApplicationRecord
    has_many :vehicles
    has_secure_password

    validates :username, presence: true, uniqueness: true
end
