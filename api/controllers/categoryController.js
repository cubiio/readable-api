const mongoose = require('mongoose');

const Category = mongoose.model('Category');

exports.postCategory = async (req, res) => {
  try {
    const category = await new Category(req.body).save();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};
