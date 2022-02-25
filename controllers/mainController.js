
const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');





const productsFilePath = path.join(__dirname,'../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const nuevoLanzamiento = products.filter((producto)=> producto.lanzamiento ==='nuevo');
const peliculas = products.filter((producto) => producto.category ==="peliculas" );


module.exports = {
    
    home: (red, res) => {
        res.render('home',{
            toThousand,
            nuevoLanzamiento
    
        });
    },

    detalleProducto: (req, res) => {
        res.render('detalle-producto',{
            toThousand,
            peliculas
        });
    },

    shoppingCart: (req, res) => {
        res.render('shopping-cart');
    },

    edicionproducto : (req, res) => {
        res.render('edicion-producto');
    },
   
};





