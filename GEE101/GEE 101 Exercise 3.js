//Create a variable for the Sentinel Image Collection
var Sentinel = ee.ImageCollection('COPERNICUS/S2');

//Select the bands needed to show Color IR
var bands = {bands: ['B8', 'B4', 'B3'], max:2000};

//Add the Image Collection to the map
Map.addLayer(Sentinel, bands, 'Original Image');

//Create a variable to show the least amount of clouds
var LeastClouds = Sentinel
  .filterDate('2016-04-01', '2016-10-01')
  .sort('CLOUDY_PIXEL_PERCENTAGE', false);
  
//Add the layer to the map
//Adding false at the end of the statement turns off the layer in the map, the default value is true
Map.addLayer(LeastClouds, bands, 'Sentinel Least Clouds', false);

//Set the center of the mapping area to the Twin Cities
//Format is Longitude, Latitude, Zoom Level
Map.setCenter(-93.3, 45, 14);
