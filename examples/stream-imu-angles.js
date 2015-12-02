"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.streamImuAngles();

  orb.on("imuAngles", function(data) {
    console.log("::STREAMING IMU ANGLES::\n",data);
  });

  orb.roll(180, 0);
});
