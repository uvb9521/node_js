const express = require("express");
const router = express.Router();
const path = require("path");
const viewPath = require("../utils/path");

router.get("/", (req, res) => {
  res.sendFile(viewPath("shop.html"));
});
module.exports = router;
