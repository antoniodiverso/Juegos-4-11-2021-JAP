const express = require("express");
const loginJson = require("./usuarios.json")
const app = express();
const port = 3000;
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
    res.send()

})

app.get("/usuarios", (req, res) => {
    res.send(loginJson)

})



app.listen(port, () => {
    console.log("Escuchando a http://localhost:" + port)
});