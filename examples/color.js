"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  // sets color to the provided r/g/b values
  console.log("RED");
  orb.color({ red: 255, green: 0, blue: 0 });

  setTimeout(function() {
    console.log("GREEN");
    // sets color to the provided hex value
    orb.color(0x00ff00);
  }, 1500);

  setTimeout(function() {
    console.log("BLUE");
    // hex numbers can also be passed in strings
    orb.color("0000ff");
  }, 3000);

  setTimeout(function() {
    console.log("YELLOW");
    // sets color to the provided color name
    orb.color("yellow");
  }, 4500);
});
