// // server.js
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3030 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message); // Attempt to parse the received data as JSON
      console.log(data);

      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          // Send the parsed JSON data to clients
          client.send(JSON.stringify(data));
        }
      });
    } catch (error) {
      console.error("Error parsing received data as JSON:", error);
    }
  });
});
console.log("running");
