const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const mainController = require('../controllers/mainController');

// RUTAS

//home
router.get('/', mainController.home);

// detalle de producto
router.get('/detalle-producto', mainController.detalleProducto);

// carrito de compras
router.get('/shopping-cart', mainController.shoppingCart);

//edicion de producto

router.get('/edicion-producto', mainController.edicionproducto);

module.exports = router;