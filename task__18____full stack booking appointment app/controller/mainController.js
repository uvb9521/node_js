const MainModel = require("../model/mainModel");

exports.getUserDetail = (req, res, next) => {
  MainModel.fetch()
    .then(([rows, fieldData]) => {
      res.render("main", {
        prods: rows,
      });
    })
    .catch((err) => console.log(err));
};

exports.postUserDetail = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;
  const user = new MainModel(name, email, number);
  user
    .save()
    .then(res.redirect("/"))
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const id = req.body.userId;
  console.log(id);
  MainModel.delete(id)
    .then(() => {
      res.send("deleted");
    })
    .catch((err) => console.log(err));
};
