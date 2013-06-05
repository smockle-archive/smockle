require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end
  
  test "should get projects" do
    get :projects, :id => 1
    assert_response :success
    
    get :projects, :id => 2
    assert_response :success
    
    get :projects, :id => 3
    assert_response :success
    
    get :projects, :id => 4
    assert_response :success
    
    get :projects, :id => 5
    assert_response :success
    
    get :projects, :id => 6
    assert_response :success
  end
end
