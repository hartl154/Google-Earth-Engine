//Get the Landsat 8 image collection
var imageCollection = ee.ImageCollection('LANDSAT/LC8_L1T_TOA');

//Define visualization parameters to show color IR
var visParams = {bands: ['B5', 'B4', 'B3']};

//Add the image collection to the map
Map.addLayer(imageCollection, visParams, 'Landsat 8');

//Center the mapping area to the Twin Cities
//Format is Longitude, Latitude, Zoom Level
Map.setCenter(-93.3, 45, 14);
