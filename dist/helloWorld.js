"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/test', function (req, res) {
    console.log(req);
    res.send({ hello: 'World!' });
});
app.post('/test', function (req, res) {
    console.log(req);
    res.send({ person: 'Yoon' });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=helloWorld.js.map