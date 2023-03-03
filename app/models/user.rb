class User < ApplicationRecord
    has_many :reviews
    has_many :programs, through: :reviews
    has_many :ranklists

    has_secure_password
    validates :first_name, format: { with: /\A[a-zA-Z]+\z/,
        message: "Only allows letters" }
    validates :last_name, format: { with: /\A[a-zA-Z]+\z/,
        message: "Only allows letters" }
    validates :email, uniqueness: true, length: { minimum: 5 }
    validates_presence_of :first_name, :last_name, :phone_number, :email
end
