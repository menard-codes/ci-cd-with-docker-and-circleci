const app = require("express")();

app.get("/", (req, res) => {
    res.json({message: "goodbye world!"});
});

module.exports = app;