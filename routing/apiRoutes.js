var path = require("path");

var friends = require("../data/friends.js")


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("server runs")
    });
    app.post("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "public/survey.html"));
        console.log("server runs")
    });
}