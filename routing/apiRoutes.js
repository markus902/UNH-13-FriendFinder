app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
    console.log("server runs")
});
app.post("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
    console.log("server runs")
});