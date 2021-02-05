const http = require("http");

console.log("Starting NodeJS server at port 8081");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello from NodeJS!");
    res.end();
  })
  .listen(8081);
