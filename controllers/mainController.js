const fs = require('fs');
const path = require('path');

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

    login : (req, res) => {
        res.render('login');
    },

    edicionproducto : (req, res) => {
        res.render('edicion-producto');
    },

    register: (req, res) => {
        res.render('register');
    }
};