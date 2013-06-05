class Mailbox < ActionMailer::Base
  default to: Figaro.env.GMAIL_USERNAME
  default from: Figaro.env.GMAIL_USERNAME
  
  def contact(message)
    @message = message
    mail(:reply_to => @message.email, :subject => "New message from Smockle.")
  end
end
