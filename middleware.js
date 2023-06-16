const express = require("express");
const app = express();
const port = 4000;

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("middleware 2");
  res.write("<h1>Hello from Node js</h1>");
});

app.listen(port);
