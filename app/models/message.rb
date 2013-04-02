class Message < ActiveRecord::Base
  has_one :reason
  attr_accessible :email, :first, :last, :message, :organization, :phone, :reason, :reason_id
  accepts_nested_attributes_for :reason
  validates :first, :presence => true
  validates :last, :presence => true
  validates :email, :presence => true, :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i }
  validates :phone, :format => { :with => /^[\(\)0-9\- \+\.]{10,20}$/ }, :allow_nil => true, :allow_blank => true
#  validates_associated :reason
end
