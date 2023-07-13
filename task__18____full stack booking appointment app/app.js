const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const mainRoute = require("./routes/mainRoutes");
app.use(mainRoute);

app.set("view engine", "ejs");
app.set("views", "views");

app.use((req, res, next) => {
  res.send("ERROR : PAGE NOT FOUND");
});
app.listen(4001);
