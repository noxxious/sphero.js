"use strict";

function isSerialPort(str) {
  // use regexp to determine whether or not 'str' is a serial port
  return /(\/dev\/|com\d+).*/i.test(str);
}

function isBluetoothPort(str) {
  return /\(?([0-9A-F]{2}[:-]){5}([0-9A-F]{2})\)?/i.test(str);
}

/**
 * Loads an adaptor based on provided connection string and system state
 *
 * @param {String} conn connection string (serial port or BLE UUID)
 * @return {Object} adaptor instance
 */
module.exports.load = function load(conn) {
  var isSerial = isSerialPort(conn),
      isBluetooth = isBluetoothPort(conn),
      isChrome = typeof chrome !== "undefined",
      Adaptor;

  if (isSerial) {
    Adaptor = require("./adaptors/serialport");
  } else if (isBluetooth){
    Adaptor = require("./adaptors/bluetooth-serialport")
  } else if (isChrome) {
    // load chrome BLE adaptor
  } else {
    // load BLE adaptor (noble?)
  }

  return new Adaptor(conn);
};
