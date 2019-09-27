var express = require("express");
var path = require("path");
var profiles = require("./app/friends.js");
// var htmlRoutes = require("./routing/htmlRoutes.js");
// var apiRoutes = require("apiRoutes.js")

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

var yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
};

var darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
};

// Routes
// ===========================================================
app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
    console.log("server runs");
});
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
    console.log("server runs");
});

app.post("/api/friends", function (req, res) {
    console.log("server runs");
    var newProfile = req.body;
    profiles.push(newProfile);
    res.json(newProfile);
});
app.get("/api/friends", function (req, res) {
    console.log("server runs");
    res.json(profiles[0]);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});