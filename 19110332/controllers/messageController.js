const { mygroup } = require('../models/mygroup');

function messageGetRequest(req, res) {
    const id = Number(req.params.id);
    if (req.method == 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        if (isNaN(id)) {
            res.write(`<html><body><ul>`);
            mygroup.forEach((student) => {
                res.write(`<li>${student.name}</li>`);
            })
            res.write(`</ul></body></html>`);

        }
        else {
            var student = mygroup.find(obj => {
                return obj.id == id;
            });
            if (student == undefined) {
                student = JSON.parse(`{"name":"not valid"}`);
            }
            res.write(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
        }
    }
}

module.exports = {
    messageGetRequest
}