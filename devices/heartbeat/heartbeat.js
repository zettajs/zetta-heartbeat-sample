var util = require('util');
var Device = require('zetta').Device;

var Heartbeat = module.exports = function() {
  this.pulse = null;

  Device.call(this);
};
util.inherits(Heartbeat, Device);

Heartbeat.prototype.init = function(config) {
  config
    .type('heartbeat')
    .monitor('pulse');

  var self = this;
  setInterval(function() {
    var min = 60;
    var max = 72;

    self.pulse = Math.round(Math.random() * (max - min) + min, 2);
  }, 500);
};
