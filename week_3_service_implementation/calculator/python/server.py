from decimal import Decimal
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs


class SimpleServer(BaseHTTPRequestHandler):

    def do_GET(self):
        # Handle GET request and send response

        if self.path.startswith("/divide"):
            self.divide()
        else:
            self.send_response(404)
            self.send_header("Content-type", "text/plain")
            self.end_headers()
            self.wfile.write(
                bytes("Page not found.", "utf-8"))

    def divide(self):
        parsed_path = urlparse(self.path)
        query = parse_qs(parsed_path.query)

        x = Decimal(query["x"][0])
        y = Decimal(query["y"][0])
        result = x / y

        self.send_response(200)

        self.send_header("Content-type", "text/html")
        self.end_headers()

        self.wfile.write(
            bytes(str(result), "utf-8"))


if __name__ == "__main__":
    hostname = "localhost"
    port = 8082
    webServer = HTTPServer((hostname, port), SimpleServer)
    print("Starting Python server at port 8082")

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
