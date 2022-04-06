
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
    
    home: (red, res) => {
        db.Product.findAll({
            limit: 8
        })
        .then((products) => {
            res.render('home',{products,toThousand})
        })
    },

    


    shoppingCart: (req, res) => {
        res.render('shopping-cart');
    },
   
};





