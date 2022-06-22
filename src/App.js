import React from "react";
import {Router,Route} from 'react-router-dom'
import ProducListing from "./components/ProductListing";
import ProductComponents from "./components/ProductComponents";
import ProductDetail from "./components/productDetail";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path='/productsdeatails' element={<ProductDetail/>}></Route>
        <Route path='/productslistning' element={<ProducListing/>}></Route>
        <Route path='/productcomponents' element={<ProductComponents/>}></Route>
        <Route path='/*'>404 Page Not Found</Route>
      </Router>
    </div>
  );
}

export default App;
