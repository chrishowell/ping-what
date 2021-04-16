module.exports = function(app){

  var pongResponse = process.env.PONG_RESPONSE || "pong"

  app.all('/ping', function(req, res) {
    res.send(pongResponse);
  });

};
