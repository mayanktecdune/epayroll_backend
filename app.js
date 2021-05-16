var express = require('express');
var cors = require('cors');
const { response } = require('express');
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Refresh-Access-Token,Accept, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,xAccessToken,Authorization');
    next();
});

app.use(require('method-override')());

app.use(cors());

app.get("/login", function (req, res) {
    return res.json({
        status: 200,
        results: "hello"
    })
})

module.exports = app;