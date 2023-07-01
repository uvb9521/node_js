const Contact = require("../model/contactModel"); // import the class form CONTACTMODEL

exports.contactGet = (req, res) => {
  res.render("contact_us", {
    pageTitle: "Contact Us Page",
    path: "/contact_us",
  });
};
exports.contactPost = (req, res, next) => {
  const contact = new Contact(req.body.name,req.body.email); // make a instance of CONTACT CLASS
  contact.save(); // call the SAVE() through the instance of CONTACT CLASS
  res.redirect("/success");
};
exports.getCustomerDetails = (req, res) => {
  const customerArray = Contact.fetchAll((customer) => {
    res.render("success", {
      pageTitle: "Success Page",
      prods: customer,
    });
  });
};

// fetch data from the CONTACT CLASS through the FETCHALL() METHOD
