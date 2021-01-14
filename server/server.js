<<<<<<< HEAD
const express = require("express");
const app = express();
const path = require("path");
const userController = require("./controller/userController");
const appController = require("./controller/appController");
const interviewController = require("./controller/interviewController");
=======
/* General Imports */
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const config = require('./models/config');

app.use(cors());
app.options('*', cors());  

/* OAuth */
const session = require('express-session');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

/* Controllers */
const userController = require('./controller/userController');
const appController = require('./controller/appController');
const interviewController = require('./controller/interviewController');
>>>>>>> a489af8d68d3314e9b43e627702a96e3a0b022a8


app.use(express.json());
<<<<<<< HEAD
app.use(express.urlencoded({ extended: true }));

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../index.html"));
=======
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

/* Routes */
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
>>>>>>> a489af8d68d3314e9b43e627702a96e3a0b022a8
});

//creating a new user
app.post("/user", userController.addUser, (req, res) => {
  return res.status(200).json("saved");
});

//getting the user info
app.get("/user/:id", userController.getUser, (req, res) => {
  return res.status(200).json({ data: res.locals.data });
});

//creating a new application
app.post("/app", appController.addApp, (req, res) => {
  return res.status(200).json("App saved");
});

//getting the users application
app.get("/app/:id", appController.getApp, (req, res) => {
  return res.status(200).json({ data: res.locals.data });
});

//deleting an application
app.delete("/app/:id", appController.deleteApp, (req, res) => {
  return res.status(200).json("app deleted");
});

//updating an application
app.patch("/app/:id", appController.updateApp, (req, res) => {
  return res.status(200).json("app updated");
});

//creating a new interview date for user
app.post("/interview", interviewController.addInterview, (req, res) => {
  return res.status(200).json("interview saved");
});

//getting the users interview info
app.get("/interview/:id", interviewController.getInterview, (req, res) => {
  return res.status(200).json({ data: res.locals.data });
});

//OAuth route
app.get('/linkedin-auth',
  (req, res, next) => {
    passport.authenticate('linkedin', { scope: ['r_emailaddress', 'r_liteprofile'],});
    next();
  },
  (req, res) => res.status(200).json({data: 'linkedin auth route response'})
);

app.get('/linkedin-auth/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/wrong',
}));

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Internal Server Error");
});

//catch all
app.use("*", (req, res) => {
  return res.status(404).send("invalid end point");
});

// //global error handler
app.use(function (err, req, res, next) {
  const defaultError = {
    log: "Express error handler caught unknown middleware error",
    status: 500, //always go 500 with server side errors
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
<<<<<<< HEAD
  console.log("App listening on port 3000!");
=======
  console.log('http://localhost:3000');
  console.log('App listening on port 3000!');
>>>>>>> a489af8d68d3314e9b43e627702a96e3a0b022a8
});

module.exports = app;
