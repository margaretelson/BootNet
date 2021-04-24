const router = require("express").Router();
const githubUserRoutes = require("./githubUser");

// Post routes
router.use("/users", githubUserRoutes);

module.exports = router;
