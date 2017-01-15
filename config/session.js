// config/secrets.js

module.exports = app => ({
  secret: SUPER_SECRET,
  cookie: {
    secure: app.get('env') === 'production',
  },
});
