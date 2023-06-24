const express = require("express");
const app = express();
const bodyParsed = require("body-parser");
const path = require("path");
app.use(bodyParsed.urlencoded({ extended: false }));
const loginRoute = require("./routes/login");
const chatRoute = require("./routes/chat");
app.use(loginRoute);
app.use(chatRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "view", "404.html"));
});
app.listen(5000);
