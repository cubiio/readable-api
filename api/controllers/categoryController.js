const mongoose = require('mongoose');

const Category = mongoose.model('Category');

exports.postCategory = async (req, res) => {
  try {
    // by immediately saving category.slug it is available for the client
    const category = await new Category(req.body).save();
    res.status(200).json(category);
  } catch (error) {
    res.status(400).send('Bad Request');
  }
};

exports.getCategories = (req, res) => {
  const defaultData = {
    categories: [
      {
        name: 'react',
        slug: 'react',
      },
      {
        name: 'redux',
        slug: 'redux',
      },
      {
        name: 'udacity',
        slug: 'udacity',
      },
    ],
  };
  res.json(defaultData);
};
