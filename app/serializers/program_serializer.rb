class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :website, :pgy1salary, :specialty, :program_size, :program_age, :state, :city, :area_type, :hospital_id

  belongs_to :hospital
  has_many :reviews
end
