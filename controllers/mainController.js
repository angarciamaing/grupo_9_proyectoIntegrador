
const path = require('path');



module.exports = {
    
    home: (red, res) => {
        res.render('home');
    },

    detalleProducto: (req, res) => {
        res.render('detalle-producto');
    },

    shoppingCart: (req, res) => {
        res.render('shopping-cart');
    },

    register: (req, res) => {
        res.render('register');
    }
};