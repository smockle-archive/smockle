require 'test_helper'

class ErrorsControllerTest < ActionController::TestCase
  test "should get not_found" do
    get :not_found
    assert_response :missing
  end

  test "should get server_error" do
    get :server_error
    assert_response :error
  end
end
