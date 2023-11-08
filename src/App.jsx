import './App.css'

import { useEffect, useState } from 'react';

import { getProducts as productsService } from './Services/getProducts';

import Product from './Components/Product/Product';
import ProductEdit from './Components/ProductEdit/ProductEdit';

function App() {
  const [products, setProducts] = useState([]);
  const [productModal, setProductModal] = useState({})
  const [showModal, setShowModal] = useState(false); 


  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await productsService();

        setProducts(response);

      }catch(e){

        console.log(e);

      };
    };

    getProducts();
  }, []);


  const handleShow = (productData) => {
    setProductModal(productData);
    
    setShowModal(true);
  }

  const handleHide = () => {
    setShowModal(false);
  }

  return (
    <section className='center'>
      <h2>Product categories</h2>

      <div className='categoriesButtons'>
        <button>All</button>
        <button>Furniture</button>
        <button>Peripherals</button>
        <button>Lamps</button>
      </div>

      <ProductEdit productData={productModal} showModal={showModal} handleHide={handleHide}/>

      <div className='products'>
        {products.map((product) => <Product data={product} handleShow={handleShow} />)}
      </div>
    </section>
  )
}

export default App
