class ApplicationController < ActionController::Base
  protect_from_forgery

  before_action :set_csp

  def set_csp
    policy = "default-src 'self' *.smockle.com; script-src 'self' 'unsafe-inline' *.smockle.com use.typekit.net www.google-analytics.com ajax.googleapis.com *.newrelic.com; style-src 'self' 'unsafe-inline' *.smockle.com use.typekit.net fonts.googleapis.com cdnjs.cloudflare.com; img-src 'self' *.typekit.net *.smockle.com *.s3.amazonaws.com www.google-analytics.com *.cdninstagram.com; font-src 'self' data: *.smockle.com themes.googleusercontent.com"
    response.headers['Content-Security-Policy'] = policy
    response.headers['X-Content-Security-Policy'] = policy
    response.headers['X-WebKit-CSP'] = policy
  end
end
