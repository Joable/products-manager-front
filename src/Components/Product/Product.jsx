import styles from './Product.module.css';

function Product({data, handleShow}){
    const {img, name, price_currency} = data

    return(
        <button onClick={() => handleShow(data)} className={styles.product}>
            <div className={styles.productImage}>
                <img src={`img/${img}`} alt="Product" />
            </div>

            <div className={styles.productText}>
                <h3>{name}</h3>

                <h4>{price_currency}</h4>
            </div>
        </button>
    );
};

export default Product;