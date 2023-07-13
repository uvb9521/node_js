const db = require("../connection/database");

module.exports = class MainModel {
  constructor(name, email, number) {
    this.name = name;
    this.email = email;
    this.number = number;
  }
  save() {
    return db.execute("INSERT INTO user (name, email, number) VALUES (?,?,?)", [
      this.name,
      this.email,
      this.number,
    ]);
  }

  static fetch() {
    return db.execute("SELECT * FROM user");
  }

  static delete(id) {
    return db.execute("DELETE FROM user WHERE id=?", [id]);
  }
};
