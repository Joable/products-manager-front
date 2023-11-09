import styles from './ProductEdit.module.css';

function ProductEdit({productData, setDisplayEdit}){
    
    const onSwitch = () => {
        setDisplayEdit(false)
    };

    return(
        <div className={styles.content}>

            <div className={styles.image}>
                <img src={productData.img}/>
            </div>

            <form className={styles.formWrapper}>

                <div className={styles.input}>
                    <label htmlFor="">Name:</label>
                    <input type="text" />

                    <label htmlFor="">Price:</label>
                    <input type="text" />
                </div>

                <div className={styles.buttons}>
                    <button onClick={onSwitch}>Cancel</button>
                    
                    <button>Save Changes</button>
                </div>

            </form>

        </div>
    );
};

export default ProductEdit;