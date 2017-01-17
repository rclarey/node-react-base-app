// src/routes/pages.js

const isLoggedIn = require('../middleware.js').isLoggedIn;

module.exports = function route(app, passport) {

  // Home page
  app.get('/', (request, response) => {
    response.render('index');
  });

  // Sign in
  app.get('/signin', (request, response) => {
    response.render('signin', { message: request.flash('signinMessage') });
  });

  app.post('/signin', passport.authenticate('signin', {
    successRedirect: '/app',
    failureRedirect: '/signin',
    failureFlash: true,
  }));

  // Sign up
  app.get('/signup', (request, response) => {
    response.render('signup', { message: request.flash('signupMessage') });
  });

  app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/app',
    failureRedirect: '/signup',
    failureFlash: true,
  }));

  // Editor app
  app.get(/\/app(\/.*)?/, isLoggedIn, (request, response) => {
    response.render('app', { user: request.user.auth.username });
  });

  // Sign out
  app.get('/signout', (request, response) => {
    request.logout();
    response.redirect('/');
  });
};
