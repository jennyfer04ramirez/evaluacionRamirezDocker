const http = require('http');
const WebSocket = require('ws');


const servidor = http.createServer();


const wss = new WebSocket.Server({ server:servidor });

wss.on("connection", (ws) => {
  console.log("Cliente conectado");

  ws.on("message", (message) => {
    console.log(`Mensaje: ${message}`);

    let parseado = JSON.parse(message);

    const broadcast = JSON.stringify(parseado);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(broadcast);
      }
    });
  });

  ws.on("close", () => {
    console.log("Cliente desconectado");
  });
});


servidor.listen(5000, () => {
  console.log("Puerto 5000 escuchando");
});