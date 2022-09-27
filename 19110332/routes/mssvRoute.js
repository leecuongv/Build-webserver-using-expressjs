const express = require('express');
const { mssvGetRequest, mssvPostRequest } = require('../controllers/mssvController');
const router = express.Router();

// define the home page route
router.get('/:id', mssvGetRequest);
router.get('/', mssvGetRequest);
// define the about route
router.post('/:id', mssvPostRequest)
module.exports = router