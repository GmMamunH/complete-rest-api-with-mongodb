// const { v4: uuidv4 } = require("uuid");

const Post = require("../models/news.model");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOnePost = async (req, res) => {
  try {
    const post = awaitPost.findOne({ id: req.params.id });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = new Post({
      // id: uuidv4(),
      name: req.body.name,
      prof: req.body.prof,
      age: Number(req.body.age),
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findOne({ id: req.params.id });
    post.name = req.body.name;
    post.prof = req.body.prof;
    post.age = Number(req.body.age);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.deleteOne({ id: req.params.id });
    res.status(200).json({ message: "post is deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
};
