import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from '../Pages/Index';
import ProductDetail from '../Pages/ProductDetail';

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<IndexPage />} />
                <Route path='/productDetail/:id' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )

}
export default Router