const express = require("express");

const app = express();

const path = require("path");

const mainRoutes = require('./routes/mainRoutes');

const publicPath = path.resolve(__dirname, "./public");

app.set('view engine', 'ejs');

app.use(express.static(publicPath));
app.use(mainRoutes);

 app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));


