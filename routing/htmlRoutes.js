var express = require("express");
var app = express();

app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
    console.log("server runs")
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
    console.log("server runs")
});

module.exports = "hello";