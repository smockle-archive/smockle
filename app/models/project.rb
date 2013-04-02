class Project < ActiveRecord::Base
  attr_accessible :client, :message, :message_es, :name, :name_es, :quote, :quote_es
end
