// const Contact = require("../models/contact");
let customerArray = [];
exports.contactGet = (req, res) => {
  res.render("contact_us", {
    pageTitle: "Contact Us Page",
    path: "/contact_us",
  });
};
exports.contactPost = (req, res, next) => {
  customerArray.push({ name: req.body.name });
  res.redirect("/success");
};
exports.getCustomerDetails = (req, res) => {
  res.render("success", {
    pageTitle: "Success Page",
    prods: customerArray,
  });
};
