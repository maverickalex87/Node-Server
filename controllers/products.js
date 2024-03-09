const products = [];


exports.getAddProducts = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add-Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true});
}

exports.postAddProduct = (req, res, next) => {
  products.push({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    });
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
}
 