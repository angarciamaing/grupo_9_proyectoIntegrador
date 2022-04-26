const db = require('../../database/models')

const Product = db.Product
const CategoryProduct = db.CategoryProduct


const productsApiController = {

    'products': async (req, res) => {
        const products = await db.Product.findAll();
        const response = {
            count: products.length,
            //countByCategory → objeto literal con una propiedad por categoría con el total de productos.
            products: {
                products: products,
                //un array con principal relación de uno a muchos (ej:categories).
                //detail → URL para obtener el detalle.
                url: '/api/products/'
            } 

        }
        res.json(response);
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(product => {
            const response = {
                //array categorias
                //Una URL para la imagen del producto (para mostrar la imagen).
                product: product,
                url: '/api/products/:id'
                    
            }
            res.json(response);
        });

    }

}

module.exports = productsApiController;

