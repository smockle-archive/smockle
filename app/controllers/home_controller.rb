require 'twitter-text'
require 'httparty'

class HomeController < ApplicationController
  include Twitter::Autolink
  include HTTParty
    
  def index
    @projects = Project.all
    @tweet = auto_link(Twitter.user("smockled").status.text, {:username_include_symbol => true})
    @question = HTTParty.get("https://api.stackexchange.com/2.1/me/questions?order=desc&sort=activity&site=stackoverflow&access_token=" + Figaro.env.SO_ACCESS_TOKEN + "&key=" + Figaro.env.SO_KEY)["items"].first
    @image = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent?access_token=" + Figaro.env.IGRAM_ACCESS_TOKEN)["data"].first["images"]["standard_resolution"]["url"]
  end
  
  def projects
    @project = Project.find(params[:id])
    @description = [ "", "" ]
    @project.description.split(".").each do |s|
      @description[@description[0].length + s.length <= @project.description.length / 2 ? 0 : 1] += s + "."
    end
  end
end