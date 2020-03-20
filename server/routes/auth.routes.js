const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../passport-setup');

// auth with google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

// auth logout
router.get('/logout', (req, res) => {
  // logout with passport
  req.logout();
  res.redirect('https://drumstore.netlify.com');
});

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('https://drumstore.netlify.com');
});

module.exports = router;
