import React, {useState, useEffect} from 'react';
import LastProduct from './LastProduct';

function ProductsInDb() {
    const [lastProducto, setLastProducto] = useState([]);


    useEffect(() => {
  
        async function getProduct(){
            try {
                const response = await fetch('http://localhost:4000/api/products')
                .then((response) =>{
                    return response.json();
                } )
                .then((data) =>{

                })
                
                const ultimoProducto = [lastProducto[lastProducto.length - 1]].response.json();
                setLastProducto(ultimoProducto.products);

            } catch (error) {
                console.error(error);
            }
        }

        getProduct();
    },[]);

    return (
        <>
           <LastProduct  />
        </>
    );
}

export default ProductsInDb;