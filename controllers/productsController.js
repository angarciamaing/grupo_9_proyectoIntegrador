const fs = require('fs');
const path = require('path');
// const { brotliDecompress } = require('zlib');
// const { BLOB } = require('sequelize/types');
// const { brotliDecompress } = require('zlib');

// const productsFilePath = path.join(__dirname,'../database/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const db = require('../database/models')

const Product = db.Product
const CategoryProduct = db.CategoryProduct



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    
    products : (req, res) => {
        // res.render('products', {
        //     products,
        //     toThousand
        // });

		const product = Product.findAll()
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
    
    create: async (req, res) => {
		const allProduct = await CategoryProduct.findAll();
		res.render('product-create-form.ejs', {allProduct});

	},

    createPost: async (req, res) => {
		try {

			let image = req.file ? req.file.filename : 'default-img.png'
			await db.Product.create({
				product_name: req.body.name,
				product_description: req.body.description,
				image: image,
				category_id: req.body.category,
				price: req.body.price
			})
	
			res.redirect('/products')
			
		} catch (error) {
			return res.send(error)
		}

	

		// console.log(req.body);
		// let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body,
		// 	image: 'default-img.png'
		// };

		// products.push(newProduct);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		// res.redirect('/products');

		// try {
		// 	let image = req.file ? req.file.filename : 'default-img.png'
			
		// 	db.Product.create({
		// 		product_name: req.body.name,
		// 		product_description: req.body.description,
		// 		image: image,
		// 		category_id: req.body.category,
		// 		price: req.body.price
		// 	})
		// } catch (error) {
			
			
		// }

		// .then(() =>{
			// 	res.redirect('/products');	
			// })

		
		// let newProduct = {
		// 	id: products[products.length - 1].id + 1,
		// 	...req.body,
		// 	image: image
		// };

		// products.push(newProduct);
		// fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));


		

		
	},



    edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		res.render('product-edit-form', { productToEdit });

	},

    update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		let image = req.file ? req.file.filename : productToEdit.image;
		
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image
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