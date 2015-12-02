"use strict";

var sphero = require("../");
var orb = sphero(process.env.PORT);

orb.connect(function() {
  orb.getBluetoothInfo(function(err, data) {
    console.log("bluetooth info fetched");
    if (err) { console.error("err:", err); }
    console.log("data:", data);
  });
});
