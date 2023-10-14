// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");
// const WebSocket = require("ws");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const server = createServer((req, res) => {
//   const parsedUrl = parse(req.url, true);
//   handle(req, res, parsedUrl);
// });

// const wss = new WebSocket.Server({ noServer: true });

// server.on("upgrade", (req, socket, head) => {
//   wss.handleUpgrade(req, socket, head, (ws) => {
//     wss.emit("connection", ws, req);
//   });
// });

// wss.on("connection", (ws) => {
//   ws.on("message", (message) => {
//     try {
//       const data = JSON.parse(message);
//       console.log(data);

//       wss.clients.forEach((client) => {
//         if (client !== ws && client.readyState === WebSocket.OPEN) {
//           client.send(JSON.stringify(data));
//         }
//       });
//     } catch (error) {
//       console.error("Error parsing received data as JSON:", error);
//     }
//   });
// });

// app.prepare().then(() => {
//   server.listen(3030, (err) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:3030");
//   });
// });
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
