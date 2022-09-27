const express = require('express');
const { messageGetRequest } = require('../controllers/messageController');
const router = express.Router();

// define the home page route
router.get('/:id', messageGetRequest);
// define the about route
router.get('/', messageGetRequest);
module.exports = router