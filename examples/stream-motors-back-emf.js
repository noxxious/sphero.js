"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.streamVelocity();
  orb.streamMotorsBackEmf();

  orb.on("motorsBackEmf", function(data) {
    console.log("::STREAMING MOTORS BACK EMF::\n",data);
  });

  orb.roll(180, 0);
});
