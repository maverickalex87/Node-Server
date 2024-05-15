exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get('Cookie').split("=")[1].split('D')[1];
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.cookie('isAuthenticated', 'loggedIn=true');
  res.redirect('/');
};
