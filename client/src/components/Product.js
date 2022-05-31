import React, { useState, useEffect } from 'react';

import ProductList from './ProductList';

function Product() {
	const [products,setProducts] = useState([]);

	useEffect(() => {
		async function getProducts(){
			try {
				const response = await fetch('http://localhost:4000/api/products');
				const products = await response.json();
				console.log(products);
				setProducts(products.products);
			} catch (error) {
				console.error(error);
			}
		}
		getProducts();
	},[]);

	return (
		<>
			{/*<!-- PRODUCTS LIST -->*/}
			<h1 className="h3 mb-2 text-gray-800">Todos los productos de la base de datos</h1>

			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Precio</th>
									<th>Categoria</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
									<th>Id</th>
									<th>Nombre</th>
									<th>Precio</th>
									<th>Categoria</th>
								</tr>
							</tfoot>
							<tbody>
								{products.map((product,index) => {
									return <ProductList {... product.products} key={index} />
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;