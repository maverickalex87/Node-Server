const Product = require('../models/product');

exports.getAddProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add-Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true});
}

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.price, req.body.description, req.body.imageUrl);
  product.save();
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });

};
