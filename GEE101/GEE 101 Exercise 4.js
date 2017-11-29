/*
  Import a Modis image

  This example imports a daily Modis image from October 20th, 2016. In order to change the date 
  of the image all you need to do is change the last three sets of numbers (it goes year, month, day).
  
  Ex. 'MOD09GA/MOD09GA_005_2016_10_20' to 'MOD09GA/MOD09GA_005_2017_04_11'
*/  

var img= ee.Image('MOD09GA/MOD09GA_005_2016_10_20');

//Calculate NDVI for the MODIS Image
var ndvi = img.normalizedDifference(['sur_refl_b02', 'sur_refl_b01']);


//create a color palette for the NDVI image
var palette = ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718',
               '74A901', '66A000', '529400', '3E8601', '207401', '056201',
               '004C00', '023B01', '012E01', '011D01', '011301'];


//Add the NDVI layer to the map 
Map.addLayer(ndvi, {palette: palette}, 'NDVI');

//Add the surface reflectance layer to the map. Here we are using the seelct property to select the bands we want to use.
//Additionally, we are giving a small gain to all of the bands to amplify the signal slightly.
Map.addLayer(img.select(['sur_refl_b01', 'sur_refl_b04', 'sur_refl_b03']), {gain: '0.1, 0.1, 0.1'}, 'Surface Reflectance');
