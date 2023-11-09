import styles from './ProductEdit.module.css';

import { useState } from 'react'

function ProductEdit({productData, setDisplayEdit}){
    const [product, setProduct] = useState(productData);
    
    
    const handleSwitch = () => {
        setDisplayEdit(false)
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setProduct({
            ...product,
            [target.name] : value
        })

        console.log(product[target.name])
    }

    return(
        <div className={styles.content}>

            <div className={styles.image}>
                <img src={productData.img}/>
            </div>

            <form className={styles.formWrapper}>

                <div className={styles.input}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange}/>

                    <label htmlFor="">Price:</label>
                    <input type="text" name="price" value={product.price} onChange={handleChange}/>
                </div>

                <div className={styles.buttons}>
                    <button onClick={handleSwitch}>Cancel</button>
                    
                    <button>Save Changes</button>
                </div>

            </form>

        </div>
    );
};

export default ProductEdit;