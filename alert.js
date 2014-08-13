module.exports = function(server) {
  var heartbeatQuery = server.where({ type: 'heartbeat' });
  var ledQuery = server.where({ type: 'led' });

  server.observe([heartbeatQuery, ledQuery], function(heartbeat, led) {
    heartbeat.streams.pulse.on('data', function(pulse) {
      if (pulse.data < 65) {
        led.call('turn-off', function(err) {
          if (err) {
            console.error('The turn off transition is unavailable.');
          }
        });
      } else {
        led.call('turn-on', function(err) {
          if (err) {
            console.error('The turn on transition is unavailable.');
          }
        });
      }
    });
  });
};
