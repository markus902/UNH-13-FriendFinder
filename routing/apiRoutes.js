var path = require("path");

var friends = require("../data/friends.js")
// var answers = require("../data/answers.js")
var answers = [];

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("Your requested the frinds array!")
    });

    app.post("/api/friends", function (req, res) {
        answers.push(req.body)
        console.log(answers);
        let eval = [];
        let index;
        friends.forEach(elem => {
            let profile = elem.score;
            let total = 0;
            let result = 0;

            // console.log(profile);
            // console.log(survey);

            for (i = 0; i < profile.length; i++) {
                result = Math.abs(profile[i] - answers[0].query[i]);
                total = total + result;
            }
            eval.push(total);
            result = Math.min(...eval);
            index = eval.indexOf(result);
        });
        console.log("total: " + eval);
        res.json({
            friend: friends[index],
        });
        answers = []; // reseting answers array
        console.log(answers)

    });
}