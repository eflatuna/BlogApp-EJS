//* Blog Route

const router = require("express").Router();

const {
	BlogPostController: BlogPostControllerView,
	BlogCategoryController,
} = require("../controllers/blogControllerView");
// const isAuth = require("../middlewares/isAuth");

//! base route => /blog

router.all("/post", BlogPostControllerView.list);
router.all("/post/create", BlogPostControllerView.create);
router.all("/post/:postId/update", BlogPostControllerView.update);
router.all("/post/:postId", BlogPostControllerView.read);
router.all("/post/:postId/delete", BlogPostControllerView.delete);

module.exports = router;
