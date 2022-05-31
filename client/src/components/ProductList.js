import React from 'react';
import { Link } from "react-router-dom";

function ProductList({ id, product_name, price, category }) {
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>
                    <Link to={`/products/detail/${id}`}>{product_name}</Link>
                </td>
                <td>{price}</td>
                <td>{category.name_category}</td>
            </tr>
        </>
    );
}


export default ProductList;