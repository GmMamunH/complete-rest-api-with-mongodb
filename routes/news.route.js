const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  createPost,
  getOnePost,
  deletePost,
  updatePost,
} = require("../controllers/news.controller");

router.get("/", getAllPosts);
router.get("/:id", getOnePost);
router.delete("/:id", deletePost);
router.patch("/:id", updatePost);
router.post("/", createPost);

module.exports = router;
