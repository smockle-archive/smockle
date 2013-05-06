require 'twitter-text'
require 'httparty'

class HomeController < ApplicationController
  include Twitter::Autolink
  include HTTParty
    
  def index
    @tweet = auto_link(Twitter.user("smockled").status.text)
    @question = HTTParty.get("https://api.stackexchange.com/2.1/me/questions?order=desc&sort=activity&site=stackoverflow&access_token=" + Smockle::Application.config.so_access_token + "&key=" + Smockle::Application.config.so_key)["items"].first["title"]
    @image = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent?access_token=" + Smockle::Application.config.igram_access_token)["data"].first["images"]["standard_resolution"]["url"]
  end
end