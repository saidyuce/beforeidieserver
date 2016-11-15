var io = require('/usr/local/lib/node_modules/socket.io').listen(65079);

io.sockets.on('connection', function (socket) {
  console.log('Server listening on port: 65079');
  var address = socket.handshake.address;
  console.log('New connection from ' + address.address + ':' + address.port);

io.sockets.emit('this', { will: 'be received by everyone'});

socket.on('email', function (msg) {
console.log('New Chat Message ', msg);
io.sockets.emit('callback',msg);
});

socket.on('disconnect', function () {
io.sockets.emit('User Disconnected');
});

socket.on('newuser', function (name) {
console.log(name,' Is Now Connected!');
io.sockets.emit('txt',name + ' is now online');
});

socket.on('exit', function (name) {
console.log(name,' Has Been Disconnected!');
io.sockets.emit('txt',name + ' is now offline');
});
});
