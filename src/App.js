import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Components
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList'
import Form from './Components/From';


function App() {

    const[products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = () => {
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(res => setProducts(res))
      }
      getProducts();
    }, [])

  return (
    <Fragment>
      <Navbar brand='Products App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAling: 'center'}}>Product List</h2>
            <ProductList products={products}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAling: 'center'}}>Product Form</h2>
            <Form/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default App;
