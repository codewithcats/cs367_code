from http.server import BaseHTTPRequestHandler, HTTPServer


class SimpleServer(BaseHTTPRequestHandler):
    def do_GET(self):
        # Handle GET request and send response

        self.send_response(200)

        self.send_header("Content-type", "text/html")
        self.end_headers()

        self.wfile.write(
            bytes("Hello from Python!", "utf-8"))


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
