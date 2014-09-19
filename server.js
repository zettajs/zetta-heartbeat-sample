var zetta = require('zetta');
var AutoScout = require('zetta-auto-scout');
var alert = require('./apps/alert');
var Heartbeat = require('zetta-mock-heartbeat-sensor');
var LED = require('zetta-mock-led');

zetta()
  .name('zetta.matt')
  .use(Heartbeat)
  .use(LED)
  .link('http://hello-zetta.herokuapp.com')
  .load(alert)
  .listen(process.env.PORT || 1337);
