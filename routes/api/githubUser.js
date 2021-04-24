const router = require("express").Router();
const githubUserController = require("../../controllers/githubUserController");

// Matches with "/api/posts"
router
  .route("/")
  .get(githubUserController.findAll)
  .post(githubUserController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(githubUserController.findById)
  .put(githubUserController.update)
  .delete(githubUserController.remove);

module.exports = router;
