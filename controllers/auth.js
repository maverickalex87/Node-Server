exports.getLogin = (req, res, next) => {

  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: res.isLoggedIn
  });
};

exports.postLogin = (req, res, next) => {
  res.cookie('isAuthenticated', 'loggedIn=true');
  res.redirect('/');
};
