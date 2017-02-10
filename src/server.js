var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var getAnswer = require('./answer');

var app = express();
app.use(cookieParser());
app.use(session({
    "secret": "ninja",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

app.get("/", function(req, res) {
    var question = req.query["q"];
    var answer = "sorry, can't find it yet";

    try {
        answer = getAnswer(question);
    } catch(err) {
        console.log(err);
    }

    console.log("Q: \"" + question + "\" A:\"" + answer + "\"");
    res.end(answer);
});

app.listen(1337, "0.0.0.0", function() {
    console.log("server started at 127.0.0.1:1337");
});