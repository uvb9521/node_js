var http = require("http");
http
  .createServer((req, res) => {
    const url = req.url;
    if (url === "/home") {
      res.write("Welcome home !");
      res.end();
    } else if (url === "/about") {
      res.write("Welcome to About Us page");
      res.end();
    } else if (url === "/node") {
      res.write("Welcome to my Node Js project");
      res.end();
    }
  })
  .listen(4000);

// Q. 1. Explain the nodejs event driven architecture.
// ans.  Node.js event-driven architecture is based on a non-blocking I/O model allowing it to handle multiple simultaneous client connections with high throughput and low latency.
// Q. 2. How can it basically scale to handle 1000 of requests a sec. What helps node JS even though it is single threaded?
// ans.  Node.js uses a single thread and an asynchronous event loop that allows it to scale to thousands of requests per second. It is lightweight compared to other web frameworks, allowing it to handle more requests with the same server resources.
// Q. 3. What does process.exit do?
// ans.  process.exit() causes the process to exit with an exit code indicating either success or failure.
// Q. 4. What does req.url , req.header and req.method contain?
// ans.  req.url contains the requested URL path, req.header contains header information about the request, and req.method contains a string representing the HTTP request method (e.g. ‘GET’ or ‘POST’).
