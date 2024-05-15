exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split("=")[1].split('D')[1] === 'true';
  console.log(req.session.isLoggedIn);
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: true

  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true; // Access the session object using 'req.session'
  res.redirect('/');
};
