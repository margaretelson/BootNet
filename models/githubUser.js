const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const githubUserSchema = new Schema({
  avatar_url: String,
  login: String,
  bio: String,
  companyName: String,
  hireable: Boolean,
  portfolio: String,
  github: String,
});

const GithubUser = mongoose.model("GithubUser", githubUserSchema);

module.exports = GithubUser;