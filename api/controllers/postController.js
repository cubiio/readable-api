const mongoose = require('mongoose');

const Post = mongoose.model('Post');

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.addPost = async (req, res) => {
  try {
    const updatedPost = {
      ...req.body,
      voteScore: 0,
      commentCount: 0,
      deleted: false,
    };
    const post = await new Post(updatedPost).save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.editPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndRemove({
      _id: req.params.id,
    }).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.voteDownPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: -1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.voteUpPost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { voteScore: +1 } },
      {
        new: true,
        runValidators: true,
      }
    ).exec();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};
