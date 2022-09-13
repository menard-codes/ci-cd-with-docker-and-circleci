const app = require("express")();

app.get("/", (req, res) => {
    res.json({message: "hola mundo"});
});

module.exports = app;