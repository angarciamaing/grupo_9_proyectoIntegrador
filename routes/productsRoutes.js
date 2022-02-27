const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.products);

router.get('/create/', productsController.create); 
router.post('/', productsController.createPost); 

router. get("/product-detail/:id", productsController.detalleProducto);

router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', productsController.update); 

router.delete('/delete/:id', productsController.delete); 

module.exports = router;




