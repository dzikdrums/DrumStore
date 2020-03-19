const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('./models/user.model');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: 'https://drumstores2.herokuapp/auth/google/redirect',
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      //check if user alrdy exists in database
      console.log(accessToken, refreshToken);
      User.findOne({ googleID: profile.id }).then(currentUser => {
        if (currentUser) {
          //alrdy have the user
          console.log('user is: ', currentUser);
          done(null, currentUser);
        } else {
          //create user in our db
          new User({
            username: profile.displayName,
            googleID: profile.id,
            thumbnail: profile.photos[0].value
          })
            .save()
            .then(newUser => {
              console.log('new user created:' + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
