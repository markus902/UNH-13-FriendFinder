var express = require("express");
var path = require("path");
var profiles = require("./app/friends.js");
var htmlRoutes = require("./routing/htmlRoutes.js");
// var apiRoutes = require("apiRoutes.js")

var app = express();
var PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

// Routes
// ===========================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/home.html"));
//     console.log("server runs");
// });
// app.get("/survey", function (req, res) {
//     res.sendFile(path.join(__dirname, "public/survey.html"));
//     console.log("server runs");
// });

// app.post("/api/friends", function (req, res) {
//     console.log("server runs");
//     var newProfile = req.body;
//     profiles.push(newProfile);
//     res.json(newProfile);
// });
// app.get("/api/friends", function (req, res) {
//     console.log("server runs");
//     res.json(profiles[0]);
// });

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});