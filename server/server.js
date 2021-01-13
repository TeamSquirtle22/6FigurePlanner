/* General Imports */
const express = require('express');
const app = express();
const path = require('path');

/* OAuth */
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

/* Controllers */
const userController = require('./controller/userController');
const appController = require('./controller/appController');
const interviewController = require('./controller/interviewController');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

/* Set Session information to server */
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

passport.use(new LinkedInStrategy({
  clientID: config.linkedinAuth.clientID,
  clientSecret: config.linkedinAuth.clientSecret,
  callbackURL: config.linkedinAuth.callbackURL,
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function (token, tokenSecret, profile, done) {
  return done(null, profile);
}
));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

//creating a new user
app.post('/user', userController.addUser, (req, res) => {
  return res.status(200).json('saved');
});

//getting the user info
app.get('/user', userController.getUser, (req, res) => {
  return res.status(200).json({data: res.locals.data});
});

//creating a new application
app.post('/app', appController.addApp, (req, res) => {
  return res.status(200).json('App saved');
});

//getting the users application
app.get('/app', appController.getApp, (req, res) => {
  return res.status(200).json({data: res.locals.data});
});

//creating a new interview date for user
app.post('/interview', interviewController.addInterview, (req, res) => {
  return res.status(200).json('interview saved');
});

//getting the users interview info
app.get('/interview', interviewController.getInterview, (req, res) => {
  return res.status(200).json({data: res.locals.data});
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

//catch all
app.use('*', (req, res) => {
  return res.status(404).send('invalid end point');
});

// //global error handler
app.use(function (err, req, res, next) {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 500, //always go 500 with server side errors
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});

module.exports = app;
