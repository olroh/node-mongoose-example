const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const mongoose = require("mongoose");
const PORT = 7080;

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(routes);

mongoose.connect("mongodb://localhost:27018/todo")
    .then(db => { 
        app.listen(PORT, () => {
            console.log(`blog started on port ${PORT}`);
        });
    });


