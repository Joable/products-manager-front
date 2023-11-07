import { useEffect } from 'react';
import './App.css'

import { products } from './assets/Products';

import Product from './Components/Product/Product';

function App() {
  
  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await fetch('/products');
        const body = await response.json();
  
        console.log(body);
        console.log(response)
      }catch(e){
        console.log(e);
      }
    };

    getProducts();

    //fetch('/products').then((response) => console.log(response.json()))
  }, []);

  return (
    <section className='center'>
      <h2>Product categories</h2>

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
