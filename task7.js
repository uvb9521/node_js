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
