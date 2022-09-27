const { mygroup } = require('../models/mygroup');

function homeGetRequest(req, resp) {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'application/json');
    resp.end(JSON.stringify(mygroup));
    resp.end();
}

module.exports = {
    homeGetRequest
}