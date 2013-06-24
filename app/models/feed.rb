require 'twitter-text'
require 'httparty'

class Feed
  include Twitter::Autolink
  include HTTParty
  
  def self.github
    Rails.cache.fetch("github", :expires_in => 10.minutes) do
      time = Time.new
      days = (0..6).map{|i| (time - (60*60*24*i)).strftime("%Y-%m-%d")}
      events = HTTParty.get("https://api.github.com/users/smockle/events/public",
                  :query => {
                    :access_token => Figaro.env.GITHUB_ACCESS_TOKEN
                  },
                  :headers => {
                    "User-Agent" => "smockle.com"
                  }).select{|i| days.include? i["created_at"].gsub(/T.*Z/, "")}
      gists = HTTParty.get("https://api.github.com/users/smockle/gists",
                  :query => {
                    :access_token => Figaro.env.GITHUB_ACCESS_TOKEN
                  },
                  :headers => {
                    "User-Agent" => "smockle.com"
                  }).select{|i| days.include? i["updated_at"].gsub(/T.*Z/, "")}     
      repos = events.each.map{|i| i["repo"]["name"]}
      mode = events.length > 0 ? repos.mode.gsub(/smockle\//, "") : ""
      output = case
      when events.length == 1
        events.length.to_s + " commit"
      when events.length > 1
        events.length.to_s + " commits"
      else ""
      end
      output += events.length > 0 ? " to <a href=\"https://github.com/smockle/" + mode + "\">" + mode + "</a>" : "No public commits"
      output += repos.uniq.length - 1 > 0 ? " and " + (repos.uniq.length - 1).to_s + " other repositories" : ""
      output += " this week. "
      output += gists.length > 0 ? gists.length.to_s : "No"
      output += " new <a href=\"https://gist.github.com/smockle\">"
      output += gists.length == 1 ? "gist</a>." : "gists</a>."
      output
    end
  end
  
  def self.instagram
    Rails.cache.fetch("instagram", :expires_in => 10.minutes) do
      HTTParty.get("https://api.instagram.com/v1/users/self/media/recent",
      :query => {
        :access_token => Figaro.env.INSTAGRAM_ACCESS_TOKEN
      })["data"].reject{|i| i["tags"].include? "p"}.first["images"]["low_resolution"]["url"]
    end
  end

  def self.stackoverflow
    Rails.cache.fetch("stackoverflow", :expires_in => 10.minutes) do
      question = HTTParty.get("https://api.stackexchange.com/2.1/me/questions",
                :query => {
                  :order => "desc",
                  :sort => "activity",
                  :site => "stackoverflow",
                  :access_token => Figaro.env.STACKOVERFLOW_ACCESS_TOKEN,
                  :key => Figaro.env.STACKOVERFLOW_KEY
                })["items"].first
      "<a href=\"" + question["link"].html_safe + "\">Question</a>: " + question["title"].html_safe
    end
  end
  
  def self.twitter
    Rails.cache.fetch("twitter", :expires_in => 10.minutes) do
      Twitter::Autolink.auto_link(Twitter.user("smockled").status.text, { :username_include_symbol => true })
    end
  end
end