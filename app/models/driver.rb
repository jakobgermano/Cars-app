class Driver < ApplicationRecord
    has_many :vehicles

    has_secure_password

    validates :password, presence: true
    validates :username, presence: true, uniqueness: true
end
