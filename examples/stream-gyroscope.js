"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.streamGyroscope();

  orb.on("gyroscope", function(data) {
    console.log("::STREAMING GYROSCOPE::\n",data);
  });

  orb.roll(180, 0);
});
