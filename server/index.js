'use strict';

const fs = require('fs');
const http = require('http');

const WebSocketServer = require('ws').Server;

const wss = new WebSocketServer({
  server: http.createServer().listen(7232),
});

wss.on('connection', (ws) => {
  ws.send(fs.readFileSync('./assets/font.ttf'));
});
