import styles from './ProductDisplay.module.css';

import { 
    useEffect, 
    useState 
} from 'react';

import { getProductsById } from '../../Services/getProducts';
import { deleteProduct } from '../../Services/deleteProduct';

function ProductDisplay({id, setDisplayEdit}){
    const [product, setProduct] = useState({
        name:"",
        price:"",
        img:""
    });

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