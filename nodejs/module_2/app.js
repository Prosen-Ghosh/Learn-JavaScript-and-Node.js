// at first "./vehile" will search for vehile.js file but we don't have a file called vehile.js'
// so it will search vehic le directory 
var vehicle = require('./vehicle');

vehicle.car.BMW_X1();
vehicle.motorcycle.DYNA_LOW_RIDER();