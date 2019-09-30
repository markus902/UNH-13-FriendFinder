var express = require("express");
var path = require("path");
var profiles = require("./data/friends.js");
var htmlRoutes = require("./routing/htmlRoutes.js");
// var apiRoutes = require("apiRoutes.js")

var app = express();
var PORT = process.env.PORT || 3000

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Routes
// ===========================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, function () {
    console.log(`App listening on PORT " ${ PORT }`);
});