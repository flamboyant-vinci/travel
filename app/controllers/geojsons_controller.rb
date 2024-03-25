# app/controllers/geojsons_controller.rb
class GeojsonsController < ApplicationController
  def show
    # Logic to retrieve the geoJSON data for a city
    # This is just an example, adjust according to your application's logic
    geojson_data = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": { "name": "Berlin" },
          "geometry": {
            "type": "Point",
            "coordinates": [13.405, 52.515]
          }
        }
      ]
    }

    render json: geojson_data
  end
end

