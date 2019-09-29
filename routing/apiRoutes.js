var path = require("path");

var friends = require("../data/friends.js")
var answers = require("../data/answers.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("Your requested the frinds array!")
    });

    app.post("/api/friends", function (req, res) {
        answers.push(req.body)
        let eval = [];
        let index;
        friends.forEach(elem => {
            let profile = elem.score;
            let survey = answers[0].query
            let total = 0;
            let result = 0;

            console.log(profile);
            console.log(survey);

            for (i = 0; i < profile.length; i++) {
                result = Math.abs(profile[i] - survey[i]);
                total = total + result;
            }
            eval.push(total);
            result = Math.max(...eval);
            index = eval.indexOf(result);
        });
        res.json({
            friend: friends[index],
        });
        answers = [];
    });
}