const path = require('path');
const { body } = require('express-validator');

const validations = {
	register: [

		// Nombre completo y nombre de usuario
		body('fullname').notEmpty().withMessage('Ingresa tu nombre completo'),
		body('userName').notEmpty().withMessage('Ingresa tu nombre de usuario'),
		//Email en formato correcto
		body('email').notEmpty().withMessage('Debe ingresar un email').bail()
					.isEmail().withMessage('No es un email, ingrese el formato correcto'),

		//password con mas de 8 caracteres
		body('password').notEmpty().withMessage('Ingrese una contraseña').bail()
						.isLength({ min: 8}),

		// la confirmacion de contraseña debe coincidir
		body('re-password', 'Las contraseñas no coinciden')
			.exists()
			.custom((value, { req }) => req.body.password.length < 8 || value === req.body.password),

		//Debe ingresar fecha de naciomiento 
		body('dateOfBirth').notEmpty().isDate().withMessage('Debe ingresar la fecha'),

	]
						

}

module.exports = validations