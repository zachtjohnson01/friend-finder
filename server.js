var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
var apiRoutes = require("./app/routing/apiRoutes");
var htmlRoutes = require("./app/routing/htmlRoutes");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});