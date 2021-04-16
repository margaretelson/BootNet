const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const githubUserSchema = new Schema({
  avatar: String,
  name: String,
  username: {
    type: String,
    unique: true,
  },
  bio: String,
  company: String,
  hireable: Boolean,
  portfolio: String,
  github: String,

});

const GithubUser = mongoose.model("GithubUser", githubUserSchema);

module.exports = GithubUser;