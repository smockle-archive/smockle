class HomeController < ApplicationController  
  def index
    @projects = Project.all
    @twitter = Feed.twitter
    @stackoverflow = Feed.stackoverflow
    @instagram = Feed.instagram
    @github = Feed.github
    @message = Message.new
  end
  
  def mail
    @message = Message.new(params[:message])
    if @message.valid?
      Mailbox.contact(@message).deliver
      flash[:notice] = "Message sent. Thank you for contacting Smockle!"
    else
      flash[:errors] = @message.errors
    end
    redirect_to root_url
  end
  
  def projects
    @project = Project.find(params[:id])
    @description = [ "", "" ]
    @project.description.split(".").each do |s|
      @description[@description[0].length + s.length <= @project.description.length / 2 + 5 && @description[1].length == 0 ? 0 : 1] += s + "."
    end
  end
end