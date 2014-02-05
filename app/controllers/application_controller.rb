class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_action :set_csp

  def set_csp
    policy = "default-src 'self' *.smockle.com; script-src 'self' 'unsafe-inline' *.smockle.com www.google-analytics.com ajax.googleapis.com *.newrelic.com *.typekit.net; style-src 'self' 'unsafe-inline' *.smockle.com fonts.googleapis.com cdnjs.cloudflare.com *.typekit.net; img-src 'self' *.smockle.com *.s3.amazonaws.com www.google-analytics.com *.typekit.net; font-src 'self' data: *.smockle.com themes.googleusercontent.com"
    response.headers['Content-Security-Policy'] = policy
    response.headers['X-Content-Security-Policy'] = policy
    response.headers['X-WebKit-CSP'] = policy
  end
end
