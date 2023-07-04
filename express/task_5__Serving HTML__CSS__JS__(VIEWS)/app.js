const express = require("express");
const app = express();
const path = require("path");
const viewPath = require("./utils/path");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contact_usRoute = require("./routes/contact_us");

app.use(adminRoute);
app.use(shopRoute);
app.use(contact_usRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(viewPath("page.html"));
});
app.listen(4001);
