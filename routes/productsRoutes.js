const express = require('express');
const multer = require('multer');
const path = require('path');
const productsController = require('../controllers/productsController');

const uploadFileProduct = require('../middlewares/multerMiddlewareProducts');

const router = express.Router();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/productsImages'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'imagen-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }    
    
});

const upload = multer({storage});

router.get('/', productsController.products);

router.get('/create/', productsController.create); 
router.post('/', upload.single('image'), productsController.createPost); 

router. get("/product-detail/:id", productsController.productDetail);

router.get('/edit/:id', productsController.edit); 
router.patch('/edit/:id', upload.single('image'), productsController.update); 

router.delete('/delete/:id', productsController.delete); 

module.exports = router;




