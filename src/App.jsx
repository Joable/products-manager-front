import './App.css'
import Product from './Components/Product/Product'

function App() {

  return (
    <section className='center'>
      <h2>Product categories</h2>

      <div>
        <button>All</button>
        <button>Furniture</button>
        <button>Peripherals</button>
        <button>Lamps</button>
      </div>

      <Product/>
    </section>
  )
}

export default App
