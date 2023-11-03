import './App.css'

import { products } from './assets/Products';

import Product from './Components/Product/Product';

function App() {

  return (
    <section className='center'>
      <h2>Product categories</h2>

      <div className='categoriesButtons'>
        <button>All</button>
        <button>Furniture</button>
        <button>Peripherals</button>
        <button>Lamps</button>
      </div>

      {products.map((product) => <Product data={product}/>)}
    </section>
  )
}

export default App
