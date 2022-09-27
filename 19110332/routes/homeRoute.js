const express = require('express');
const { homeGetRequest } = require('../controllers/homeController');
const router = express.Router();

// define the home page route
router.get('/', homeGetRequest);
// define the about route

module.exports = router