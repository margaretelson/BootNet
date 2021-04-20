const router = require("express").Router();
const githubUserRoutes = require("./githubUser");

// Post routes
router.use("/githubUser", githubUserRoutes);

module.exports = router;
