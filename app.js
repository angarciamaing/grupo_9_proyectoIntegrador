const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get("/detalle-producto", (req, res) => res.sendFile(path.resolve(__dirname, './views/detalle-producto.html')));
