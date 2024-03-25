/**
 * Function to add a geoJSON layer to the map
 * @param {H.Map} map - A HERE Map instance within the application
 * @param {Object} geoJSON - The geoJSON object to add to the map
 */
function addGeoJSONLayer(map, geoJSON) {
    // Create a geoJSON reader to parse the geoJSON layer
    var reader = new H.data.geojson.Reader(geoJSON);
    reader.parse();

    // Obtain the parsed feature and add it to the map
    map.addLayer(reader.getLayer());
}

// Example of a dummy geoJSON object
var dummyGeoJSON = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "name": "Example Location"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [13.405, 52.515] // Coordinates for Berlin
        }
    }]
};

// Use the function to add the dummy geoJSON to the map
addGeoJSONLayer(map, dummyGeoJSON);

// Function to fetch and add geoJSON data from the backend
function fetchAndDisplayGeoJSON(map, city) {
    fetch(`/geojsons/${city}`)
        .then(response => response.json())
        .then(data => addGeoJSONLayer(map, data))
        .catch(error => console.log('Error fetching geoJSON data:', error));
}

// Example usage with Berlin as the city
//fetchAndDisplayGeoJSON(map, 'Berlin');

