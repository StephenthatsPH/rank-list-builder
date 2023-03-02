class User < ApplicationRecord
    has_many :reviews
    has_many :programs, through: :reviews
    has_many :ranklists

    has_secure_password
end
