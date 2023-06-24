const express = require("express");
const router = express.Router();
const path = require("path");

const viewPath = require("../utils/path");

router.get("/add-product", (req, res) => {
  res.sendFile(viewPath("add-product.html"));
});
router.post("/add-product", (req, res) => {
  res.redirect("/");
});
module.exports = router;
