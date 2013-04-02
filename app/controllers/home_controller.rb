class HomeController < ApplicationController
  before_filter :vars
  
  def vars
    @project = Project.find(1)
    @reasons = Reason.all
    @labels = { "first" => t(:first), "last" => t(:last), "organization" => t(:organization), "phone" => t(:phone), "reason" => t(:reason), "message" => t(:message) }
    begin
      @tweets = Twitter.user_timeline("SmockleWeb", :count => 10)
    rescue
      @tweets ||= []
    end
  end
    
  def index
    @message = Message.new
  
    respond_to do |format|
      format.html
      format.json { render :json => @message }
    end
  end
  
  def create
    @reason = Reason.find(params[:message][:reason])
    params[:message][:reason] = @reason
    params[:message][:reason_id] = @reason.id
    @message = Message.new(params[:message])
  
    respond_to do |format|
      if @message.save
        #Mailbox.contact_me(@message).deliver
        #Mailbox.contact_them(@message).deliver
        format.json  { render :json => @message, :status => :created }
      else
        format.json  { render :json => @message.errors, :status => :unprocessable_entity }
      end
    end
  end
  
  def project
    @project = Project.find(params[:id])
    render :json => @project
  end
  
  def contact
    @reason = Reason.find(params[:reason_id])
    @message = Message.find(params[:id])
    render :partial => "contact_success"
  end
  
  def credits
  end
end
