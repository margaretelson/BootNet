const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const app = express();
const session = require('express-session');
const passport = require('passport');

 
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
// Passport init
app.use(passport.initialize());
app.use(passport.session());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(bodyParser.json())
// Add routes, both API and view
//app.use(require("./routes/api"));
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Bootnet',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});