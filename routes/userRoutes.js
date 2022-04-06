const express = require('express');
const router = express.Router();
//controller
const userController = require('../controllers/userController');

//Middlewares

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guesMiddleware = require('../middlewares/guesMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//Formulario de registro
router.get('/register', guesMiddleware, userController.register);

//Processar el registro
router.post('/register',uploadFile.single('profile_picture'), validations.register, userController.processRegister)

//Formulario del login
router.get('/login', guesMiddleware, userController.login);

// Proceso formulario del login
router.post('/login', userController.loginProcess);

// perfil de usuario
router.get('/profile', authMiddleware, userController.profile);

// logout  
router.get('/logout',  userController.logout);

module.exports = router;