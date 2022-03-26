const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname,'../database/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    
    products : (req, res) => {
        res.render('products', {
            products,
            toThousand
        });
    },
    
    create: (req, res) => {

		res.render('product-create-form.ejs');

	},

    createPost: (req, res) => {
		let image = req.file ? req.file.filename : 'default-img.png'
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/products');
	},

	productDetail: (req, res) => {
        
        const id = req.params.id;
        const product = products.find((funko) => funko.id == id);
        const related = products.filter((funko) => funko.category == product.category && funko.id != product.id);
        
        return res.render('product-detail',
            {
                pageTitle: product.productName,
                product,
                toThousand,
                carousel: {
                    condition: "related",
                    funkos: related,
                }
            }
        )
        
    },

    edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		res.render('product-edit-form', {productToEdit});

	},

    editPatch: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		let image = req.file ? req.file.filename : productToEdit.image;
		
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image
		};
		
		let newProducts = products.map(product => {
			//product.id == productToEdit.id ? product = {...productToEdit} : product; Corregir ternario
			if (product.id == productToEdit.id) {
				return product = {...productToEdit}
			}
			return product;
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		//res.redirect('/');
		res.redirect('/products');

	},

	delete : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		//res.redirect('/');
		res.redirect('/products');

	}

};