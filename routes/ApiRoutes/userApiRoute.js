const express = require('express');
const router = express.Router();
//controller
const userApiController = require('../../controllers/apiCtrllers/userApiController');

//Middlewares

const uploadFile = require('../../middlewares/multerMiddleware');
const validations = require('../../middlewares/validateRegisterMiddleware');



//CRUD Usuarios

//<Read>
router.get('/',userApiController.userList);

// <Create>
router.post('/', uploadFile.single('profile_picture'),userApiController.processRegister);
router.post('/admin-register',uploadFile.single('profile_picture'),validations.register, userApiController.saveAdminRegister);

//<Uptade>
router.put('/',uploadFile.single('profile_picture'), validations.userEdition, userApiController.saveEdition);

//<Delete>
router.delete('/',userApiController.deleteUser);

//Login
router.post('/login', userApiController.loginProcess);


module.exports = router;