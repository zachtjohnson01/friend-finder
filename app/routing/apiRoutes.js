var friendsData = require("../data/friends");
var questionsData = require("../data/questions");

module.exports = function(app) {

    app.get("/api/questions", function(req, res) {
        res.json(questionsData);
    });
};