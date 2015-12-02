"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.color({ red: 255, green: 128, blue: 0 });

  orb.getColor(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Color is:", data.color);
    }
  });
});
