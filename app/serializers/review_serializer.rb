class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :post, :user_id, :program_id

  belongs_to :program
  belongs_to :user
end
