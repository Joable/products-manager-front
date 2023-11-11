import styles from './CreateProduct.module.css';

import { 
    useEffect,
    useState
} from 'react';

function CreateProduct(){
    const [modal, setModal] = useState("");

    useEffect(() => {
        setModal(document.getElementById('newProduct'));
    }, [])

    const handleShow = () => {
        modal.style.display = "flex";
    };

    const handleClose = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            handleClose();
        };
    };

    return(
        <>
        <button onClick={handleShow}>
            Add new product
        </button>

        <div id='newProduct' className={styles.modal}> 
                    
            <div className={styles.content}>
                <form className={styles.form}>
                    <label>Name:</label>
                    <input type="text" />

                    <label >Price:</label>
                    <input type="text"/>

                    <div className={styles.buttons}>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>

        </div>
        </>
    );
};

export default CreateProduct;