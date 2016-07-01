var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var db = require('./server/db')

var connections = [];

/* Serve static files */
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

/* Setup middleware */
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  next();
})

app.get('/api/entries', function (req, res) {
  res.json( {results: db.data} )
});

app.post('/api/entries', function (req, res) {
  console.log(req.body)
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function(){
  console.log('Server running at http://localhost:3000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {

  socket.once('disconnect', function() {
      connections.splice(connections.indexOf(socket), 1);
      socket.disconnect();
      emitConnectionCount();
      console.log('Disconnected. Sockets remaining: ' + len());
  });

  connections.push(socket);
  emitConnectionCount();
  console.log('Connected. Sockets remaining: ' + len());

});

function len(){
  return connections.length;
}

function emitConnectionCount() {
  io.sockets.emit('connectionCount', {
    socketCount: len()
  })
}
