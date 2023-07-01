const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const viewPath = require("./utils/path"); // import VIEWPATH function from the path.js for send files on the browser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
// app.set("views", "views"); // you can omit this line because our all EJS files are saved in view folder when our file store in other folder we have to use this line
const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contact_usRoute = require("./routes/contact_us");
const success = require("./routes/success");
const badRequest = require("./controllers/error");

app.use(adminRoutes);
app.use(shopRoute);
app.use(contact_usRoute.routes);
app.use(success);
app.use(badRequest.get404);

app.listen(4001);
