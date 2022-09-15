const app = require("express")();

app.get("/", (req, res) => {
    res.json({message: "hello world!"});
});

module.exports = app;