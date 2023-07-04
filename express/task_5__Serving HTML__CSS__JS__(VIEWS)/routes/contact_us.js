const express = require("express");
const router = express.Router();
const path = require("path");
const viewPath = require("../utils/path");

router.get("/contact_us", (req, res) => {
  res.sendFile(viewPath("contact_us.html"));
});
router.post("/success", (req, res) => {
  res.send("Form Successfully Field");
});
module.exports = router;
