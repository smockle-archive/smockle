class Message < ActiveRecord::Base
  include Rakismet::Model
  include ActiveModel::ForbiddenAttributesProtection

  validates_presence_of :name, :content
  validates_format_of :email, :with => /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i
end