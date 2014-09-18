var zetta = require('zetta');
var AutoScout = require('zetta-auto-scout');
var alert = require('./apps/alert');
var Heartbeat = require('./devices/heartbeat/heartbeat');
var LED = require('./devices/LED/led');

var HeartbeatScout = new AutoScout('heartbeat', Heartbeat);
var LEDScout = new AutoScout('led', LED);

zetta()
  .use(HeartbeatScout)
  .use(LEDScout)
  .load(alert)
  .listen(process.env.PORT || 1337);
