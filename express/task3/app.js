const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.send("<h1>ERROR : 404 PAGE NOT FOUND</h1>");
});
app.listen(4000);
