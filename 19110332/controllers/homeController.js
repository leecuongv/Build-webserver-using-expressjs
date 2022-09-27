const { mygroup } = require('../models/mygroup');

function homeGetRequest(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(mygroup));
    res.end();
}

module.exports = {
    homeGetRequest
}