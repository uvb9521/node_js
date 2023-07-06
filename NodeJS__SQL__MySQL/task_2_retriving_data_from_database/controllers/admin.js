const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/add-product",
    isEdit: "",
  });
};

exports.getAdminProducts = (req, res, next) => {
  // console.log("hello");
  Product.fetchAll()
    .then(([rows, fieldData]) => {
      res.render("admin/products", {
        prods: rows,
        pageTitle: "All Admin Product List",
        path: "/admin-product",
      });
    })
    .catch((err) => console.log(err));
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;

  const product = new Product(null, title, description, price, imageUrl);
  product
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getEditMyProduct = (req, res, next) => {
  const isEditMode = req.query.isEditing;
  const productId = req.params.productId;

  Product.findProductById(productId)
    .then(([product]) => {
      res.render("admin/edit-product", {
        pageTitle: "Editing Product",
        path: "",
        product: product,
        isEdit: isEditMode,
      });
    })
    .catch((err) => console.log(err));
};
exports.saveModifedProduct = (req, res, next) => {
  console.log("1st");
  const productId = req.body.productId;
  const modifiedTitle = req.body.title;
  const modifiedPrice = req.body.price;
  const modifiedImgUrl = req.body.imageUrl;
  const modifedDesc = req.body.description;
  console.log("2nd");
  const modifiedProduct = new Product(
    productId,
    modifiedTitle,
    modifedDesc,
    modifiedPrice,
    modifiedImgUrl
  );
  console.log("3rd");
  modifiedProduct
    .saveModifiedFile()
    .then(() => {
      console.log("4th");
      res.redirect("/admin/admin-product");
    })
    .catch((err) => console.log(err));
};

exports.removeProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.remove(productId)
    .then(() => {
      res.redirect("/admin/admin-product");
    })
    .catch((err) => console.log(err));
};
