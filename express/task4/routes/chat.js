const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/chat", (req, res, next) => {
  fs.readFile("msg.txt", (err, data) => {
    if (err) data = " no data";
    res.send(`<pre>${data}</pre>
      <form action="/chat" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
      <input type="text" id="message" name="message" placeholder="msg..">
      <input type="hidden" id="username" name="username" >
      <button type="submit">Send</button>
    </form>`);
  });
});
router.post("/chat", (req, res, next) => {
  fs.appendFileSync("msg.txt", `${req.body.username}:${req.body.message}\n`);
  res.redirect("/chat");
});
module.exports = router;
