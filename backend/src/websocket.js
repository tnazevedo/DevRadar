const soquetio = require('socket.io');
exports.setupWebsocket = (server)=>{
  console.log('ok websocket')
  const io = socketio(server);
  io.on('connection', socket=>{
    console.log(socket.id);
    console.log(socket.handshake.query)
  })
};