require 'mail_interceptor'

ActionMailer::Base.smtp_settings = {
  :address              => "smtp.gmail.com",
  :port                 => 587,
  :domain               => "smockle.com",
  :user_name            => Figaro.env.GMAIL_USERNAME,
  :password             => Figaro.env.GMAIL_PASSWORD,
  :authentication       => "plain",
  :enable_starttls_auto => true
}

ActionMailer::Base.default_url_options[:host] = "localhost:3000"
Mail.register_interceptor(MailInterceptor) if Rails.env.development?