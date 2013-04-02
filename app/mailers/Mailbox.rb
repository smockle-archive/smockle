class Mailbox < ActionMailer::Base
  default to: "clay@smockle.com"
  default from: "clay@smockle.com"
  
  def contact_me(message)
    @message = message
    mail(:to => "clay@smockle.com", :reply_to => @message.email, :subject => "New message from Smockle.")
  end

  def contact_them(message)
    @message = message
    mail(:to => @message.email, :subject => "Thanks for contacting Smockle!")
  end
end
