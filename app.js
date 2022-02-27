const express = require("express");
const session = require("express-session");
const req = require("express/lib/request");
const app = express();
const path = require("path");

app.use(session({
    secret: 'secreto!!',
    resave: false,
    saveUninitialized: false
}));

//Middleware login
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

app.use(userLoggedMiddleware);


//Rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes')

const publicPath = path.resolve(__dirname, "./public");

//Template Engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));//permite procesar formularios
app.use(express.static(publicPath));
app.use(mainRoutes);
app.use('/user', userRoutes);
app.use('/products', productsRoutes);

 app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));


