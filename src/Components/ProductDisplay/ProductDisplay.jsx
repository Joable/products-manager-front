import styles from './ProductDisplay.module.css';

import { 
    useContext, useEffect, useState 
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';

import { deleteProduct } from '../../Services/deleteProduct';

function ProductDisplay({product, setDisplayEdit, setShowModal}){
    const [productData, setProductData] = useState({
        name:"",
        price:"",
        img:""
    });
    const {change, setChange} = useContext(ChangeContext);

    useEffect(() => {
        if(product) setProductData(product)
    },[product])

    const handleSwitch = () => {
        setDisplayEdit(true);
    };

    const handleDelete = () =>{
        const invokeDelete = async() =>{
            await deleteProduct(productData._id);

            setShowModal(false)

            setChange(true);
        };

        invokeDelete();
    };

    return(
        <>
        <div className={styles.image}>
            <img src={productData.img}/>
        </div>

        <div className={styles.textWrapper}>

            <div className={styles.productDataText}>
                <h2>
                    {productData.name}
                </h2>

                <h3>
                    {productData.price}
                </h3>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleSwitch}>Edit</button>

                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </>
    );
};

export default ProductDisplay;