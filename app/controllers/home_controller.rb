class HomeController < ApplicationController  
  def index
    @projects = Project.all
    @message = Message.new
  end
  
  def feeds
    render :json => { :twitter => Feed.twitter, :stackoverflow => Feed.stackoverflow, :instagram => Feed.instagram, :github => Feed.github }
  end
  
  def mail
    @message = Message.new(params.require(:message).permit(:name, :email, :content))
    respond_to do |format|
      if @message.valid?
        Mailbox.contact(@message).deliver
        format.json  { render :json => { :message => "Message sent. Thank you for contacting Smockle!"}, :status => :created }
      else
        format.json  { render :json => @message.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  def projects
    @project = Project.find(params[:id])
    @description = [ "", "" ]
    @project.description.split(".").each do |s|
      @description[@description[0].length + s.length <= @project.description.length / 2 + 5 && @description[1].length == 0 ? 0 : 1] += s + "."
    end
  end
end