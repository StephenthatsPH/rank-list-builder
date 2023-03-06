class RanklistSerializer < ActiveModel::Serializer
  attributes :id, :program_name, :geographic, :goodfit, :reputation, :personalities, :qol, :edu_training, :overall_rating, :comment, :user_id

  belongs_to :user
end