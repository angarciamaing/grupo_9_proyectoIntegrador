import React from "react";
import image from '../assets/images/funko-justice-leage.jpg'

function LastProduct( {id, product_name, product_description, price, category} ) {
    return (
        <>
            <div className="row">
                {/*<!-- Last Movie in DB -->*/}
                <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto base de datos </h5>
                        </div>
                        <div className="card-body">
                            <div className="text-center">
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 100 + 'rem' }} src={image} alt=" Star Wars - Mandalorian " />
                                <td>{product_name} </td>
                            </div>
                            {/* <p>{product_name}</p>
                            <p>{product_description}</p> */}
                            {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default LastProduct;