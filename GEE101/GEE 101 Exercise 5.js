//Import the Minnesota County boundary that was saved as a Fusion Table
var fc = ee.FeatureCollection('ft:1AUAqtp7_zRv1hCmkJoEWDQ-ZnittJSufOUluxUQI');

//Print the properties of the Fusion Table to the Console Tab
print(fc);



//Filter out Ramsey County 
var Ramsey = fc.filterMetadata('CTY_NAME', 'starts_with', 'Ram');


/* Import a Landsat 8 image

   This example imports a Landsat image from June 7th, 2017. In order to change the date of the image all you need to do
   is change the last set of numbers (it goes year, month, day (YYYYMMDD)). The naming convention in Earth engine for
   Landsat 8 imagery is as follows: Ls8ppprrr_YYYYMMDD
   
   ID     Description
  ----------------------------------------------------- 
   L      Landsat
   s      Sensor O=OLI, T=TIRS, C=Combined OLI and TIRs
   ppp    WRS-2 Path
   rrr    WRS-2 Row
   YYYY   Year
   MM     Month
   DD     Day
   
   ex. 'LANDSAT/LC08/C01/T1_TOA/LC08_028028_20170607' to 'LANDSAT/LC08/C01/T1/TOA/LC08_028028_20170513
   
   
*/
var img = ee.Image('LANDSAT/LC08/C01/T1_TOA/LC08_027029_20170607');
  

//Clip the Landsat image to Ramsey County
var AOI = img.clip(Ramsey);

//Add the clipped Landsat image to the map
Map.addLayer(AOI.select(['B4', 'B3', 'B2']));


// Export the image to your Google Drive. This will appear under the Tasks tab to the right. You will 
// have to click the Run button next to the task name and then it will extract the image to your
// Google Drive.

Export.image.toDrive({
  image: AOI,
  description: 'Landsat_Image',
  scale: 500,
  maxPixels: 1e13
});
