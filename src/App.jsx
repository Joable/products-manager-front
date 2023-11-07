import './App.css'

import { useEffect, useState } from 'react';

import Product from './Components/Product/Product';
import ProductEdit from './Components/ProductEdit/ProductEdit';

function App() {
  const [products, setProducts] = useState([]);  


  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await fetch('/products');
        const body = await response.json();

        setProducts(body);
      }catch(e){
        console.log(e);
      }
    };

    getProducts();
  }, []);

  return (
    <section className='center'>
      <h2>Product categories</h2>
      <ProductEdit/>

      <div className='categoriesButtons'>
        <button>All</button>
        <button>Furniture</button>
        <button>Peripherals</button>
        <button>Lamps</button>
      </div>

      <div className='products'>
        {products.map((product) => <Product data={product}/>)}
      </div>
    </section>
  )
}

export default App
