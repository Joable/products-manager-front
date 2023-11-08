import styles from './ProductEdit.module.css';

function ProductEdit({setDisplayEdit}){
    
    const onSwitch = () => {
        setDisplayEdit(false)
    }

    return(
        <div className={styles.content}>
        <form>
            <label htmlFor="">Name:</label>
            <input type="text" />

            <label htmlFor="">Price:</label>
            <input type="text" />

            <button onClick={onSwitch}>Cancel</button>
            <button>Save Changes</button>
        </form>
        </div>
    );
};

export default ProductEdit;