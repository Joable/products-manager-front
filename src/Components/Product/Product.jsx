import styles from './Product.module.css';

function Product(){
    return(
        <div className={styles.product}>
            <div className={styles.productImage}>
                <img src="./img/osaka3.PNG" alt="Product" />
            </div>

            <div className={styles.productText}>
                <h3>Product Name</h3>

                <h4>Price</h4>
            </div>
        </div>
    );
};

export default Product;