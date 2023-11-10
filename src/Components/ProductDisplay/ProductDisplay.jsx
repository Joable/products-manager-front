import styles from './ProductDisplay.module.css';

import { 
    useContext 
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';

import { deleteProduct } from '../../Services/deleteProduct';

function ProductDisplay({product, setDisplayEdit, handleClose}){
    const {change, setChange} = useContext(ChangeContext);

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