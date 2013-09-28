class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_action :set_csp

  def set_csp
    policy = "default-src 'self'; script-src 'self' ajax.googleapis.com; style-src 'self' 'unsafe-inline' fonts.googleapis.com; img-src 'self' *.s3.amazonaws.com; font-src 'self' themes.googleusercontent.com"
    response.headers['Content-Security-Policy'] = policy
    response.headers['X-Content-Security-Policy'] = policy
    response.headers['X-WebKit-CSP'] = policy
  end
end
