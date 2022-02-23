const express = require('express');
const router = express.Router();
//controller
const userController = require('../controllers/userController');

//Middlewares

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');


//Formulario de registro
router.get('/register', userController.register);

//Processar el registro
router.post('/register',uploadFile.single('profilePicture'), validations.register, userController.processRegister)

//Formulario del login
router.get('/login', userController.login);

module.exports = router;