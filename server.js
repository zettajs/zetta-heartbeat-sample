var zetta = require('zetta');
var AutoScout = require('zetta-auto-scout');
var alert = require('./alert');
var Heartbeat = require('./heartbeat');
var LED = require('./led');

var HeartbeatScout = new AutoScout('heartbeat', Heartbeat);
var LEDScout = new AutoScout('led', LED);

zetta()
  .use(HeartbeatScout)
  .use(LEDScout)
  .load(alert)
  .listen(process.env.PORT || 1337);
