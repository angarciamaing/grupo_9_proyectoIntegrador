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

const validationsProducts = require('../middlewares/validateProductsMiddleware');

router.get('/', productsController.products);

router.get('/create/', productsController.create); 
router.post('/', upload.single('image'), validationsProducts.create, productsController.createPost); 

router. get("/product-detail/:id", productsController.productDetail);

router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', upload.single('image'), productsController.editPatch); 

router.delete('/delete/:id', productsController.delete); 

module.exports = router;




