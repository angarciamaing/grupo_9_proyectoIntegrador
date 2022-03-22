const fs = require('fs');
const path = require('path');
const { brotliDecompress } = require('zlib');
// const { BLOB } = require('sequelize/types');
// const { brotliDecompress } = require('zlib');

// const productsFilePath = path.join(__dirname,'../database/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const db = require('../database/models')



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    
    products : (req, res) => {
        // res.render('products', {
        //     products,
        //     toThousand
        // });

		db.Product.findAll()
		.then( (products) =>{
			res.render('products', {products, toThousand})
		})
    },

    // detalleProducto: (req, res) => {
        
    //     const id = req.params.id;
    //     const product = products.find((funko) => funko.id == id);
    //     const related = products.filter((funko) => funko.category == product.category && funko.id != product.id);
        
    //     return res.render('product-detail',
    //         {
    //             pageTitle: product.productName,
    //             product,
    //             toThousand,
    //             carousel: {
    //                 condition: "related",
    //                 funkos: related,
    //             }
    //         }
    //     )
        
    // },
    
    create: (req, res) => {

		res.render('product-create-form.ejs');

	},

    createPost: (req, res) => {
		// console.log(req.body);
		// let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body,
		// 	image: 'default-img.png'
		// };

		// products.push(newProduct);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		// res.redirect('/products');

		db.Product.create({
			product_name: req.body.name,
			product_description: req.body.description,
			image: req.body.image,
			category_id: req.body.category,
			price: req.body.price
		})

		res.redirect('/products');

		
	},



    edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		res.render('product-edit-form', { productToEdit });
	},

    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: productToEdit.image
		};

		let newProducts = products.map(product => {
			// product.id == productToEdit.id ? product = {...productToEdit} : product;
			if (product.id == productToEdit.id) {
				return product = {...productToEdit}
			}
			return product;
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');

	},

	delete : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');

	}

};