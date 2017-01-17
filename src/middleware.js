// src/middleware.js

module.exports = {

  isLoggedIn(request, response, next) {
    if (request.isAuthenticated()) { return next(); }
    return response.redirect('/signin');
  },
  
}
