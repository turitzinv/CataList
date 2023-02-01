class List < ApplicationRecord
  has_many :items
  belongs_to :category
  belongs_to :user
  
end
