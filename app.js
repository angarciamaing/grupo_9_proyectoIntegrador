const express = require("express");

const app = express();

const path = require("path");

const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get("/detalle-producto", (req, res) => res.sendFile(path.resolve(__dirname, './views/detalle-producto.html')));

app.get('/register', (req,res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/shopping-cart', (req,res) => res.sendFile(path.resolve(__dirname, './views/shopping-cart.html')));
app.get("/edicion-producto", (req, res) => res.sendFile(path.resolve(__dirname, './views/edicion-producto.html')))