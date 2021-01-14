/* General Imports */
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const passport = require('passport');

/* Controllers */
const userController = require('./controller/userController');
const appController = require('./controller/appController');
const interviewController = require('./controller/interviewController');

app.use(cors());
app.options('*', cors());  
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

/* OAuth */
const session = require('express-session');
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'SECRET'
}));
app.use(passport.initialize());
app.use(passport.session());
const initializePassport = require('./models/config');
initializePassport(passport);

/* Set Session information to server */
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.send('You must login!');
  }
}

/* Routes */
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

//deleting an application
app.delete('/app/:id', appController.deleteApp, (req, res) => {
  return res.status(200).json('app deleted')
})

//creating a new interview date for user
app.post('/interview', interviewController.addInterview, (req, res) => {
  return res.status(200).json('interview saved');
});

//getting the users interview info
app.get('/interview', interviewController.getInterview, (req, res) => {
  return res.status(200).json({data: res.locals.data});
});

//OAuth route
app.get('/linkedin-auth', (req, res) => {
  passport.authenticate('linkedin', { scope: ['r_emailaddress', 'r_liteprofile'],})
  res.redirect('/linkedin-auth/callback');
});

app.get('/linkedin-auth/callback', (req, res, next) => {console.log('asd;flkjqrepoi'); next()}, passport.authenticate('linkedin', {
  successRedirect: 'https://github.com/chrisakinrinade/6FigurePlanner/tree/LinkedIn_OAuth',
  failureRedirect: 'https://www.npmjs.com/package/passport-linkedin-oauth2',
  // failureFlash: true,
}));

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
  console.log('http://localhost:3000');
  console.log('App listening on port 3000!');
});

module.exports = app;
