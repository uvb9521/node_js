const express = require("express");
const router = express.Router();
const path = require("path");
const viewPath = require("../utils/path");

router.get("/success", (req, res) => {
  res.send("<h1>data is submitted successfully</h1>");
});
module.exports = router;
