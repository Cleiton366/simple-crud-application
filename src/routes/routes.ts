import { ClienteController } from "../controllers/ClienteController";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const clienteController = new ClienteController();
let clientsArr;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log("Server up and running at port 3000.");
});

app.get("/", (req, res) => {

    clienteController.getClients()
        .then((results) => {
            clientsArr = results;
        });
    setTimeout(function () {
        console.log("Loading files.");
        res.render("../public/views/index.ejs", { clientsArr });
    }, 1000);

});

app.post("/addClient", (req, res) => {
    clienteController.create(req, res);
});

app.put("/update", (req, res) => {
    clienteController.update(req, res);
});

app.delete("/delete", (req, res) => {
    clienteController.delete(req, res);
});

