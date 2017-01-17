// src/middleware.js

module.exports = {

  isLoggedIn(request, response, next) {
    if (request.isAuthenticated()) { return next(); }
    return response.redirect('/signin');
  },

  isReactRoute(request, response, next) {
    if(request.path === request.path.match(/\/app(\/(asdf(\/)?)?)?/g)[0]) {
      next();
    } else {
      response.status(404).render('404');
    }
  },

}
