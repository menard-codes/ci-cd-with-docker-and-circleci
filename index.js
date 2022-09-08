const app = require("express")();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send({message: "hello world"});
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
