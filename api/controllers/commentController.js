const mongoose = require('mongoose');

const Comment = mongoose.model('Comment');

exports.addComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body).save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ parentId: req.params.id }).exec();
    res.status(200).json(comments);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};
