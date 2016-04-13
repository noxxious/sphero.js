"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function(function(error) {
  if (error) {
    console.err(error);
    return;
  }

  console.log("::START CALIBRATION::");
  orb.startCalibration();
  setTimeout(function() {
    console.log("::FINISH CALIBRATION::");
    orb.finishCalibration();
  }, 5000);
});
