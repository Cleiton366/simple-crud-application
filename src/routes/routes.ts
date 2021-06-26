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

 app.get("/", async (req, res) => {   
    await clienteController.getClients().then((clientsArr) => {
        res.render("../public/views/index.ejs", { clientsArr });
    });
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

