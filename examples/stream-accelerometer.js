"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.streamAccelerometer();

  orb.on("accelerometer", function(data) {
    console.log("::STREAMING ACCELEROMETER::\n",data);
  });

  orb.roll(180, 0);
});
