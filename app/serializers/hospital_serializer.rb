class HospitalSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :programs
end
