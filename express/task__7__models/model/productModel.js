const fs = require("fs");
const path = require("path");

const pathBuilt = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    fs.readFile(pathBuilt, (err, data) => {
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }
      products.push(this);
      fs.writeFile(pathBuilt, JSON.stringify(products), (err, data) => {
        console.log("err", err);
      });
    });
  }
  static fetchAll(callbackFn) {
    fs.readFile(pathBuilt, (err, data) => {
      if (err) return callbackFn([]);
      callbackFn(JSON.parse(data));
    });
  }
};
