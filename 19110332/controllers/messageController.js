const { mygroup } = require('../models/mygroup');

function messageGetRequest(req, resp) {
    const id = Number(req.params.id);
    if (req.method == 'GET') {
        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'text/html');
        if (isNaN(id)) {
            resp.write(`<html><body><ul>`);
            mygroup.forEach((student) => {
                resp.write(`<li>${student.name}</li>`);
            })
            resp.write(`</ul></body></html>`);

        }
        else {
            var student = mygroup.find(obj => {
                return obj.id == id;
            });
            if (student == undefined) {
                student = JSON.parse(`{"name":"not valid"}`);
            }
            resp.write(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
        }
    }
}

module.exports = {
    messageGetRequest
}