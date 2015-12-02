"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.streamVelocity();

  orb.on("velocity", function(data) {
    console.log("::STREAMING VELOCITY::\n",data);
  });

  orb.roll(180, 0);
});
