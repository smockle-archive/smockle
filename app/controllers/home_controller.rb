require 'twitter-text'
include Twitter::Autolink

class HomeController < ApplicationController
  def index
    @tweet = auto_link(Twitter.user("smockled").status.text)
  end
end
