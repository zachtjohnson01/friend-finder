var friendsData = require("../data/friends");
var questionsData = require("../data/questions");

module.exports = function(app) {

    app.get("/api/questions", function(req, res) {
        res.json(questionsData);
    });
    app.get("/api/surveyResults", function(req, res) {
        res.json(friendsData);
    });
    app.post("/api/surveyResults", function(req,res) {
        if (!req.body) {
            return false
        } else {
            friendsData.push(req.body);
        }
    });
};