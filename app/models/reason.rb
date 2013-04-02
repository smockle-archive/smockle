class Reason < ActiveRecord::Base
  belongs_to :message
  attr_accessible :reason, :reason_es
#  validates :id, :presence => true
end
