import styles from './Product.module.css';

function Product({data, handleShow}){
    const {img, name, price} = data

    const displayImage = () => {
        if(!img){
            return "img/yotsu2.png";
        }else{
            return img;
        };
    };

    return(
        <button onClick={handleShow} className={styles.product}>
            <div className={styles.productImage}>
                <img src={displayImage()} alt="Product" />
            </div>

            <div className={styles.productText}>
                <h3>{name}</h3>

                <h4>{price}</h4>
            </div>
        </button>
    );
};

export default Product;