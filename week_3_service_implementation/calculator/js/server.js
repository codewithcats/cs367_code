const http = require("http");
const url = require("url");

function minus(req, res) {
  const q = url.parse(req.url, true).query;

  const x = parseFloat(q.x);
  const y = parseFloat(q.y);
  const result = x - y;

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(result.toString());
  res.end();
}

console.log("Starting NodeJS server at port 8081");
http
  .createServer(function (req, res) {
    if (req.url.startsWith("/minus")) {
      minus(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("Mai mee na ja");
      res.end();
    }
  })
  .listen(8081);
