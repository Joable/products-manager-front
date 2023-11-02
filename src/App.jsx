import './App.css'
import Product from './Components/Product/Product'

function App() {

  return (
    <>
      <h2>Product categories</h2>

      <button>All</button>
      <button>Furniture</button>
      <button>Peripherals</button>
      <button>Lamps</button>

      <Product/>
    </>
  )
}

export default App
