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

//Rutas
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/userRoutes');//errror

const publicPath = path.resolve(__dirname, "./public");

//Template Engine
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));//permite procesar formularios
app.use(express.static(publicPath));
app.use(mainRoutes);
app.use('/user', userRoutes);


// app.get('/prueba', (req, res) => {
//     req.session.usuario = 'juan perez',
//     req.session.rol = 'admin',
//     req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
//     console.log(req.session);
//     res.send('el usuario' + req.session.usuario + ' con rol ' + req.session.rol + ' avisistado esta pagina ' + req.session.visitas)
// })

 app.listen(4000, () => console.log("Servidor corriendo en el puerto: 4000"));


