const express = require('express');
const baseController = require('../controllers/baseController');
const categoryController = require('../controllers/categoryController');

const router = express.Router();
const apiVersion = 'v2';

router.get('/', baseController.helpPage);
router.get(`/${apiVersion}`, baseController.helpPage);

router.post(`/${apiVersion}/category`, categoryController.postCategory);

router.get(`/${apiVersion}/categories`, categoryController.getCategories);

module.exports = router;
