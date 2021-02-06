// load modules
const http = require("http");

// code
console.log("Starting NodeJS server at port 8081");

function handleRoot(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello from NodeJS!");
  res.end();
}

http
  // handle path "/"
  .createServer(handleRoot)
  .listen(8081);
