import styles from './ProductDisplay.module.css';

function ProductDisplay({productData, setDisplayEdit}){

    const handleSwitch = () => {
        setDisplayEdit(true)
    }

    return(
        <div className={styles.content}>

            <div className={styles.image}>
                <img src={productData.img}/>
            </div>

            <div className={styles.textWrapper}>

                <div className={styles.productText}>
                    <h2>
                        {productData.name}
                    </h2>

                    <h3>
                        {productData.price}
                    </h3>
                </div>

                <div className={styles.buttons}>
                    <button onClick={handleSwitch}>Edit</button>

                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;