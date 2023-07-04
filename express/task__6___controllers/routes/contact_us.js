const path = require("path");
const express = require("express");
const router = express.Router();

// const customerArray = [];

const contactController = require("../controllers/contact");
router.get("/contact_us", contactController.contactGet);

router.post("/contact_us", contactController.contactPost);
module.exports = { routes: router };
