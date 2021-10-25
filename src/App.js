import React, { Fragment, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

//Import Components
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList'
import Form from './Components/From';


function App() {

  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: 0,
    description: '',
    quantity: 0,
    category: 0
  });

    const[products, setProducts] = useState([]);

    const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
      const getProducts = () => {
        fetch('http://localhost:4000/products')
        .then(res => res.json())
        .then(res => setProducts(res))
      }
      getProducts();
      setListUpdated(false);
    }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Products App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{textAling: 'center'}}>Product List</h2>
            <ProductList products={products} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAling: 'center'}}>Product Form</h2>
            <Form product = {product} setProduct = {setProduct}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}


export default App;
