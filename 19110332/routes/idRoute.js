const express = require('express');
const { idGetRequest, idPostRequest } = require('../controllers/idController');
const router = express.Router();

// define the home page route
router.get('/:id', idGetRequest);
router.get('/', idGetRequest);
// define the about route
router.post('/:id', idPostRequest)
module.exports = router