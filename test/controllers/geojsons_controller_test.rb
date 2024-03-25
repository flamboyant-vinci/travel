require "test_helper"

class GeojsonsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get geojsons_show_url
    assert_response :success
  end
end
