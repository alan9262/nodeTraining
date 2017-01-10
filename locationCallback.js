var location = require('./locationInfo.js');

location(function(locationInfo){
  console.log(locationInfo);
});

location(function(location){
  if(!location) {
    console.log('Unable to guess location');
    return;
  }

  console.log( 'log/lat: ' + location.loc);
});
