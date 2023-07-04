const { json } = require("express");
const fs = require("fs");
const path = require("path");

const pathBuilt = path.join(
  path.dirname(require.main.filename),
  "data",
  "contact.json"
);

module.exports = class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  save() {
    const contact = [];
    fs.readFile(pathBuilt, (err, data) => {
      if (!err) contact = JSON.parse(data);
    });
    contact.push(this);
    fs.writeFile(pathBuilt, JSON.stringify(contact), (err) => {
      console.log("err", err);
    });
  }
  static fetchAll(callbackFn) {
    fs.readFile(pathBuilt, (err, data) => {
      if (err) return callbackFn([]);
      callbackFn(JSON.parse(data));
    });
  }
};
