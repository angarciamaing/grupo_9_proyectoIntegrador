const express = require('express');
const mainController = require('../controllers/mainController');

const router = express.Router();


router.get('/', mainController.home);
router. get("/product-detail/:id",mainController.detalleProducto);
router.get('/shopping-cart', mainController.shoppingCart);
//router.get('/register', mainController.register);
//router.get('/login', mainController.login);
router.get('/edicion-producto', mainController.edicionproducto);

module.exports = router;