const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

function initialize(passport) {
  passport.use(new LinkedInStrategy({
    clientID: '774zevniuq3x8r',
    clientSecret: 'anYjpBDHBbJCUxLY',
    callbackURL: 'http://localhost:3000/linkedin-auth/callback',
    scope: ['r_emailaddress', 'r_liteprofile'],
    }, function (token, tokenSecret, profile, done) {
      console.log(profile);
      // check if there's a user with this email in the db.
      return done(null, profile);
    }
  ));
}

module.exports = initialize
