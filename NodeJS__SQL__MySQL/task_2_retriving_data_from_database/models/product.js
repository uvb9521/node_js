const { closeDelimiter } = require("ejs");
const db = require("../connection/database");

module.exports = class Product {
  constructor(_productId, _title, _description, _price, _imageUrl) {
    this.productId = _productId;
    this.title = _title;
    this.description = _description;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
  save() {
    return db.execute(
      "INSERT INTO products (title,description,price,imageUrl) VALUES (?,?,?,?)",
      [this.title, this.description, this.price, this.imageUrl]
    );
  }

  saveModifiedFile() {
    console.log("this.saveModifiedFile");
    console.log(this.title);
    const id = parseInt(this.productId); //convert product id from string to number because i make a column with the number in the database
    console.log(typeof id);

    return db.execute(
      "UPDATE products SET `title` = ?, `description` = ?, `price` = ?, imageUrl = ? WHERE (`productId` = ?)",
      [this.title, this.description, this.price, this.imageUrl, id]
    );
  }

  ///

  //
  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }
  static findProductById(id) {
    return db.execute("SELECT * FROM products WHERE products.productId=?", [
      id,
    ]);
  }
  static remove(id) {
    return db.execute("DELETE FROM products WHERE productId = ?", [id]);
  }
};
