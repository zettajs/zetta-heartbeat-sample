var zetta = require('zetta');
var alert = require('./apps/alert');
var Heartbeat = require('zetta-mock-heartbeat-sensor');
var LED = require('zetta-mock-led');

zetta()
  .name('zetta.matt')
  .use(LED)
  .use(Heartbeat)
  .use(alert)
  .link('http://hello-zetta.herokuapp.com')
  .listen(process.env.PORT || 1337);
