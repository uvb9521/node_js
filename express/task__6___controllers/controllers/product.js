exports.getAddProduct = (req, res, next) => {
  res.render("product", {
    pageTitle: "Add Product",
    path: "/add-product",
  });
};
let products = [];
exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};
exports.getProducts = (req, res, next) => {
  res.render("shop", {
    pageTitle: "Shop",
    path: "/",
    prods: products,
  });
};
