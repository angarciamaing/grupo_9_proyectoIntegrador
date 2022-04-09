
const { body } = require('express-validator');
const path = require('path');
const validationsProducts = {
	create: [
		// Nombre completo y nombre de usuario
		body('productName').notEmpty().withMessage('Ingresa el nombre del producto')
						.isLength({min: 5}).withMessage('Debe contener minimo 5 caracteres'),
		// Descripción del producto
		body('description').notEmpty().withMessage('Ingresa la descripción del producto')
						.isLength({min: 20}).withMessage('Debe contener Minimo 20 caracteres'),
		// Imagen del producto
		body('image', 'sube una foto de perfil en formato JPG, JPEG o PNG').custom((value, { req }) => {
			
			let acceptedExtensions = ['.jpg', '.jpeg', '.png'];
			if (typeof req.file == 'undefined') {
				throw new Error('Elegí una imagen de perfil');
			} else if (req.file.originalname) {
				let fileExtension = path.extname(req.file.originalname);
				let extensionIsOk = acceptedExtensions.includes(fileExtension);
				if (!extensionIsOk) {
					throw new Error('Los formatos válidos son JPG, JPEG y PNG');
				}
			}
			return true;
		}),
		//Categoria
		body('category').notEmpty().withMessage('Debes ingresar una categoria'),
		//Precio
		body('price').notEmpty().withMessage('Ingrese el precio')
					.isNumeric().withMessage('Ingrese un valor numerico'),
	]						
}

module.exports = validationsProducts