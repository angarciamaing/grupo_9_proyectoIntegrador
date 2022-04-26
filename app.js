const express = require("express");
const session = require("express-session");
const cookies = require('cookie-parser');
const req = require("express/lib/request");
const app = express();
const path = require("path");

const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

app.use(session({
    secret: 'secreto!!',
    resave: false,
    saveUninitialized: true
}));

//Middleware login
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware')

app.use(cookies());
app.use(userLoggedMiddleware);

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//Rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');
const productsRoutes = require('./routes/productsRoutes')

const publicPath = path.resolve(__dirname, "./public");

//Template Engine
app.set('view engine', 'ejs');

app.use(express.json());//permite procesar los datos de JSON para API
app.use(express.urlencoded({ extended: false }));//permite procesar formularios
app.use(express.static(publicPath));
app.use(mainRoutes);

// Routes
app.use('/user', userRoutes);
app.use('/products', productsRoutes);

//Api Rotes
app.use('/api/user', require('./routes/ApiRoutes/userApiRoute'));

 app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));


