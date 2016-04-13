"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function(error) {
  if (error) {
    console.err(error);
    return;
  }
  
  orb.color("FF00FF");

  orb.getBluetoothInfo(function(err, data) {
    if (err) { console.error("err:", err); }
    else {
      console.log("bluetoothInfo:");
      console.log("  name:", data.name);
      console.log("  btAddress:", data.btAddress);
      console.log("  separator:", data.separator);
      console.log("  colors:", data.colors);
    }
  });
});
