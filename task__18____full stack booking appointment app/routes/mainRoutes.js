const express = require("express");
const router = express.Router();
const main_controller = require("../controller/mainController");

router.get("/", main_controller.getUserDetail);
router.post("/got", main_controller.postUserDetail);

router.get("/delete", main_controller.deleteUser);

module.exports = router;
