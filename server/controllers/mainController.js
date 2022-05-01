
//const path = require('path');
//const fs = require('fs');
//const {validationResult} = require('express-validator');
//const productsFilePath = path.join(__dirname,'../database/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
//const nuevoLanzamiento = products.filter((producto)=> producto.lanzamiento ==='nuevo');
//const peliculas = products.filter((producto) => producto.category ==="peliculas" );
const db = require('../database/models');
const sequelize = db.sequelize
const {Op} = require('sequelize')

module.exports = {
    
    home: (req, res) => {
        //permite guardar la informacion del usuario logueado para mostrarla en la barra de navegacion
        let userLogged = req.session.userId
        db.Product.findAll({
            limit: 8
        })
        .then((products) => {
            res.render('home',{products,toThousand,userLogged})
        })
    },

    


    shoppingCart: (req, res) => {
        //permite guardar la informacion del usuario logueado para mostrarla en la barra de navegacion
        let userLogged = req.session.userId
        res.render('shopping-cart',{userLogged});
    },
   
};





