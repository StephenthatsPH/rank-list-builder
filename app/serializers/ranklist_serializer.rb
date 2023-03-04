class RanklistSerializer < ActiveModel::Serializer
  attributes :id, :program_name, :geographic, :goodfit, :reputation, :personalities, :qol, :edu_training, :comment, :user_id

  belongs_to :user
end