class Driver < ApplicationRecord
    has_many :vehicles

    validates :username, presence: true, uniqueness: true
end
