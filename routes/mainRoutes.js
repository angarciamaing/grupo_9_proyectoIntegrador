const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();


router.get('/', mainController.home);
router.get('/detalle-producto', mainController.detalleProducto);
router.get('/shopping-cart', mainController.shoppingCar);
router.get('/register', mainController.register);

module.exports = router;