const { mygroup } = require('../models/mygroup');
const { validId } = require('../models/valid_Id');


function mssvGetRequest(req, resp) {
    const id = Number(req.params.id);
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'application/json');
    if (isNaN(id)) {
        resp.end(JSON.stringify(mygroup));
    }
    else {
        var student = mygroup.find(obj => {
            return obj.id == id;
        });
        if (student == undefined) {
            student = `{error:'not valid'}`;
        }
        resp.end(JSON.stringify(student));
    }
}

function mssvPostRequest(req, resp) {
    const id = Number(req.params.id);
    const newStudent = JSON.parse(JSON.stringify(req.body));
    var existed = checkExist(newStudent.id);
    if (validId.includes(newStudent.id) && validId.includes(id.toString()) && !existed) {
        mygroup.push(newStudent);
        req.pipe(resp);
        resp.setHeader('Access-Control-Allow-Origin', '*');
        resp.end();
    }
    else {
        resp.setHeader('Content-Type', 'text/html');
        resp.setHeader('Access-Control-Allow-Origin', '*');
        resp.write(`<html><body><ul><li>Not valid</li></ul></body></html>`);
        resp.end();
    }
}

module.exports = {
    mssvGetRequest, mssvPostRequest
}

function checkExist(id) {
    var flag;
    mygroup.forEach((item) => {
        if (item.id === id) {
            flag = true;
        }
    })
    if (flag == undefined) {
        flag = false;
    }
    return flag;
}