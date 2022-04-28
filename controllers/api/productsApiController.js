const db = require('../../database/models')

const Product = db.Product
const CategoryProduct = db.CategoryProduct


const productsApiController = {

    'products': async (req, res) => {
        try {
            const products = await db.Product.findAll();
            const categoryProduct = await db.CategoryProduct.findAll();
            const data = {
                count: products.length,
                //countByCategory → objeto literal con una propiedad por categoría con el total de productos.
                countByCategory: categoryProduct,
                products: products.map(product => {
                return{
                    products: product,
                    //un array con principal relación de uno a muchos (ej:categories).
                    category: product.name_category,
                    url: 'http://localhost:4000/api/products/' + product.id
                }
                })
            }
            res.json(data);
        }catch(error){
            res.json('Algo salió mal')
        }
    },

    'detail': async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id);
            const data = {
                product:product,
                //un array por cada relación de uno a muchos (categories, colors,sizes, etc)
                url: 'http://localhost:4000/img/productsImages/' + product.image,
            }
            res.json(data);
        }catch(error){
            res.json('Algo salió mal')
        }
    }

}

module.exports = productsApiController;

