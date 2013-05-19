class MailInterceptor
  def self.delivering_email(message)
    message.subject = "#{message.to} #{message.subject}"
    message.to = Figaro.env.GMAIL_USERNAME
  end
end