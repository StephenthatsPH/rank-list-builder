class Program < ApplicationRecord
    belongs_to :hospital
    
    has_many :reviews
    has_many :users, through: :reviews
end
