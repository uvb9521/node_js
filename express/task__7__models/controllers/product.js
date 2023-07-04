const Product = require("../model/productModel");

exports.getAddProduct = (req, res, next) => {
  res.render("product", {
    pageTitle: "Add Product",
    path: "/add-product",
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};
exports.getProducts = (req, res, next) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      pageTitle: "Shop",
      path: "/",
      prods: products,
    });
  });
};
