const router = require("express").Router();
const passportRoutes = require("./passport");
const githubUserRoutes = require("./githubUser");

// Post routes
router.use("/users", githubUserRoutes);
router.use("/auth", passportRoutes);
module.exports = router;
