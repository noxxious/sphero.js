"use strict";

/* eslint no-use-before-define: 0 */
/* eslint no-process-exit: 0 */

var sphero = require("../");

// make sure you install this first - `npm install keypress`
var keypress = require("keypress");

var orb = sphero(process.env.PORT);

orb.connect(listen);

function listen() {
  keypress(process.stdin);
  process.stdin.on("keypress", handle);

  console.log("Listening for key presses: [arrows], e=calibrate, q=stop calibration, space=stop");

  process.stdin.setRawMode(true);
  process.stdin.resume();
}

function handle(ch, key) {
  var stop = orb.roll.bind(orb, 0, 0),
      roll = orb.roll.bind(orb, 60);

  if (key.ctrl && key.name === "c") {
    process.stdin.pause();
    process.exit();
  }

  if (key.name === "e") {
    console.log("Calibrating...");
    orb.startCalibration();
  }

  if (key.name === "q") {
    console.log("Calibrated.");
    orb.finishCalibration();
  }

  if (key.name === "up") {
    roll(0);
  }

  if (key.name === "down") {
    roll(180);
  }

  if (key.name === "left") {
    roll(270);
  }

  if (key.name === "right") {
    roll(90);
  }

  if (key.name === "space") {
    console.log("Stop!");
    stop();
  }
}

