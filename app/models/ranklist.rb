class Ranklist < ApplicationRecord
    belongs_to :user

    validates :program_name, presence: true
    validates :geographic, length: {in: 1..5, message: "Rating scale is between 1 through 5"}
    validates :goodfit, length: {in: 1..5, message: "Rating scale is between 1 through 5"}
    validates :reputation, length: {in: 1..5, message: "Rating scale is between 1 through 5"}
    validates :personalities, length: {in: 1..5, message: "Rating scale is between 1 through 5"}
    validates :edu_training, length: {in: 1..5, message: "Rating scale is between 1 through 5"}
    validates :user_id, length: {in: 1..5, message: "Rating scale is between 1 through 5"}

    attr_accessor :geographic, :goodfit, :reputation, :personalities, :edu_training

    def overall geographic, goodfit, reputation, personalities, edu_training
        geographic + goodfit + reputation + personalities + edu_training
    end

end