var mosca = require('mosca');

var ascoltatore = {
  //using ascoltatore
  //type: 'mongo',
  //url: 'mongodb://localhost:27017/mqtt',
  //pubsubCollection: 'ascoltatori',
  //mongo: {}
};

var settings = {
  port: 443,
  backend: ascoltatore
};

var server = new mosca.Server(settings);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);
});

// 收到消息时触发
server.on('published', function(packet, client) {
  console.log("packet   ", packet.payload.toString())
});

server.on('ready', setup);

// 服务器准备好之后触发
function setup() {
  console.log('Mosca server is up and running');
}