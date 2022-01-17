
const path = require('path');



module.exports = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/home.html' ));
    },

    detalleProducto: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/detalle-producto.html'));
    },

    shoppingCar: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/shopping-cart.html'));
    },

    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, '../views/register.html'));
    }
};