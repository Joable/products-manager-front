import styles from './ProductEdit.module.css';

function ProductEdit(){
    

    return(
        <>
        <form>
            <label htmlFor="">Name:</label>
            <input type="text" />

            <label htmlFor="">Price:</label>
            <input type="text" />

            <button>Cancel</button>
            <button>Save Changes</button>
        </form>
        </>
    );
};

export default ProductEdit;