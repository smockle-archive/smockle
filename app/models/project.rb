class Project < ActiveRecord::Base
  attr_accessible :client, :description, :link, :name, :offset_x, :offset_y, :quote
end
