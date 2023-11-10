import styles from './ProductDisplay.module.css';

import { 
    useEffect, 
    useState,
    useContext 
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';

import { getProductsById } from '../../Services/getProducts';
import { deleteProduct } from '../../Services/deleteProduct';

function ProductDisplay({id, setDisplayEdit, handleClose}){
    const [product, setProduct] = useState({
        name:"",
        price:"",
        img:""
    });
    const {change, setChange} = useContext(ChangeContext);

    useEffect(() => {
        const getProduct = async () =>{
            const response = await getProductsById(id);

            setProduct(response[0]);
        };

        getProduct();
    }, [id]);

    const handleSwitch = () => {
        setDisplayEdit(true);
    };

    const handleDelete = () =>{
        const invokeDelete = async() =>{
            await deleteProduct(id);

            handleClose();
            
            setChange(true);
        };

        invokeDelete();
    }

    return(
        <>
        <div className={styles.image}>
            <img src={product.img}/>
        </div>

        <div className={styles.textWrapper}>

            <div className={styles.productText}>
                <h2>
                    {product.name}
                </h2>

                <h3>
                    {product.price}
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