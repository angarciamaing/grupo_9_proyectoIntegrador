
const { body } = require('express-validator');
const path = require('path');
const validations = {
	register: [

		// Nombre completo y nombre de usuario
		body('fullname').notEmpty().withMessage('Ingresa tu nombre completo'),

		body('username').notEmpty().withMessage('Debe contener un nombre de usuario')
						.isAlphanumeric().withMessage('El usuario debe ser alfanumerico')
						.isLength({min: 6}).withMessage('Debe contener Minimo 6 caracteres')
						.trim()
						.withMessage('El nombre de usuario no debe contener espacios, ni caracteres especiales y debe contener minimo 6 caracteres'),
		//Email en formato correcto
		body('email').notEmpty().withMessage('Debes ingresar un email')
					 .isEmail().withMessage('No es un email, ingrese el formato correcto'),

		//password con mas de 8 caracteres
		body('password').notEmpty().withMessage('Ingrese una contraseña').bail()
						.isStrongPassword({
							minLength: 8,
							minLowercase: 1,
							minUppercase: 1,
							minNumbers: 1,
							minSymbols: 1
						}).withMessage('La contraseña debe contener minimo: 8 caracteres, una mayuscula, una miniscula, un numero y un caracter especial'),

		// la confirmacion de contraseña debe coincidir
		body('re_password', 'Las contraseñas no coinciden')
			.exists()
			.custom((value, { req }) => req.body.password.length < 8 || value === req.body.password),

		body('profilePicture', 'sube una foto de perfil en formato JPG, JPEG o PNG').custom((value, { req })=> req.body.profilePicture === "undefined"),

	]
						

}

module.exports = validations