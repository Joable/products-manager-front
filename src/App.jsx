import './App.css'

import { useEffect, useState } from 'react';

import { getProducts as productsService } from './Services/getProducts';
import { ChangeContext } from './Context/ChangeContext';

import Product from './Components/Product/Product';
import ProductModal from './Components/ProductModal/ProductModal';
import CreateProduct from './Components/CreateProduct/CreateProduct';

function App() {
  const [products, setProducts] = useState([]);
  const [productModal, setProductModal] = useState({})
  const [showModal, setShowModal] = useState(false); 
  const [change, setChange] = useState(ChangeContext);

  //gets the products from the data base on mount
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

  //when 'change' changes to true, refreshes the products
  useEffect(() => {
    const getProducts = async () => {
      try{
        const response = await productsService();
        setProducts(response);
      }catch(e){
        console.log(e);
      };
    };

    if(change){
      getProducts();

      setChange(false);
    };
  }, [change]);

  const handleShow = (productData) => {
    setProductModal(productData);
    
    setShowModal(true);
  };

  return (
    <section className='center'>
      <h2>Product categories</h2>

      <div className='categoriesButtons'>
        <button>All</button>
        <button>Furniture</button>
        <button>Peripherals</button>
        <button>Lamps</button>
      </div>

      <ChangeContext.Provider value={{change, setChange}}>
        <ProductModal id={productModal._id} showModal={showModal} setShowModal={setShowModal}/>
        
        <CreateProduct/>
      </ChangeContext.Provider>


      <div className='products'>
        {products.map((product) => <Product data={product} handleShow={handleShow} />)}
      </div>
    </section>
  )
}

export default App
