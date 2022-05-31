import React from 'react';
import {Routes, Route} from "react-router-dom";
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ContentRowProducts from './ContentRowProducts';
import ProductsInDb from './ProductsInDb';
import Product from './Product';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Routes>
                        <Route exact path="/" element={<ContentRowTop />} />
                        <Route path="/totales" element={<ContentRowProducts />} />
                        <Route path="/listProducts" element={<Product />} />
                        <Route path="/lastProduct" element={<ProductsInDb />} />
                    </Routes>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;