class ApplicationController < ActionController::Base
  protect_from_forgery
  
  before_action :set_csp

  def set_csp
    policy = "default-src 'self' *.smockle.com; script-src 'self' 'unsafe-inline' *.smockle.com www.google-analytics.com ajax.googleapis.com; style-src 'self' 'unsafe-inline' *.smockle.com fonts.googleapis.com; img-src 'self' *.smockle.com *.s3.amazonaws.com; font-src 'self' *.smockle.com themes.googleusercontent.com"
    response.headers['Content-Security-Policy'] = policy
    response.headers['X-Content-Security-Policy'] = policy
    response.headers['X-WebKit-CSP'] = policy
  end
end
