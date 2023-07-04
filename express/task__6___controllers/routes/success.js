const express = require("express");
const router = express.Router();
const contactData = require("./contact_us");
const customerController = require("../controllers/contact");

router.get("/success", customerController.getCustomerDetails);

module.exports = router;
// contactArray: contactArray,
