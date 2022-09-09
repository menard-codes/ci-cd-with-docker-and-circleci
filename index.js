const app = require("express")();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({message: "hello world"});
});

// app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
module.exports = app;