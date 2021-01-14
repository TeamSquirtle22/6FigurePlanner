const express = require("express");
const app = express();
const path = require("path");
const userController = require("./controller/userController");
const appController = require("./controller/appController");
const interviewController = require("./controller/interviewController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../index.html"));
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
  console.log("App listening on port 3000!");
});

module.exports = app;
