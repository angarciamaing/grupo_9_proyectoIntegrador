const express = require('express');
const router = express.Router();
const { body } = require('express-validator')
const mainController = require('../controllers/mainController');
const usersController = require('../controllers/usersCotroller');
// VALIDACIONES

const validationLogin = [
    body('email').isEmail().withMessage('Debes ingresar un email valido'),
    body('password').notEmpty().isLength({min:8}).withMessage('La contraseña debe tener almenos 8 caracteres')
]

const validationRegister = [
    body('nombreApellido').notEmpty().withMessage('Debes ingrear tu nombre completo'),
    body('nombreUsuario').notEmpty().withMessage('ingresa un nombre de usuario'),
    body('email').isEmail().withMessage('Ingresa un email valido'),
    body('fechaNacimiento').notEmpty().withMessage('Seleccciona tu fecha de nacimiento'),
    body('password').notEmpty().isLength({min: 8}).withMessage('Crea tu contaseña'),
    body('repitPassword').notEmpty().isLength({min: 8}).withMessage('Repite tu contraseña')
]

// RUTAS

//home
router.get('/', mainController.home);

// detalle de producto
router.get('/detalle-producto', mainController.detalleProducto);

// carrito de compras
router.get('/shopping-cart', mainController.shoppingCart);

//formulario de registro
router.get('/register', usersController.register);

//procesamiento formulario de registro
router.post('/register', validationRegister, mainController.store)

//página de login
router.get('/login', usersController.login);

//edicion de producto
router.get('/edicion-producto', mainController.edicionproducto);

module.exports = router;