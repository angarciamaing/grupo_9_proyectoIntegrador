const express = require('express');
const router = express.Router();
const multer = require('multer');

const path = require('path');

const productsController = require('../controllers/productsController');

const uploadFileProduct = require('../middlewares/multerMiddlewareProducts');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.join(__dirname, '../public/img/productsImages')),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({storage});

router.get('/totalProducts', productsController.products);

router.get('/create', productsController.create); 

// router.post('/create', productsController.createPost); 
router.post('/create', upload.single('image'), productsController.createPost); 


// router. get("/product-detail/:id", productsController.detalleProducto);

// router. get("/product-detail/:id", productsController.productDetail);

// LISTADO PRODUCTOS
router.get('/', productsController.listado); 

// DETALLE PRODUCTOS
router.get("/:id", productsController.detalleProducto);

// EDICION PRODUCTO
router.get("/edit/:id", productsController.edit);
router.post("/edit/:id", productsController.actualizar);

//DELETE
router.post("/delete/:id", productsController.delete)



//  router.post('/edit/', upload.single('image'), productsController.update); 

// router.delete('/delete/:id', productsController.delete); 

module.exports = router;




