import styles from './ProductEdit.module.css';

import { useState, useEffect } from 'react';

function ProductEdit(){
    const [modal, setModal] = useState("");

    useEffect(() => {
        setModal(document.getElementById('myModal'));
    }, []);

    const onShow = () => {
        modal.style.display = "block"
    };

    const onClose = () => {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) onClose();
    };


    return(
        <>
        <button onClick={onShow}>Open modal</button>

       <div id='myModal' className={styles.modal}> 
            <div className={styles.content}>
                AAAAA
            </div> 

       </div>
        </>
    );
};

export default ProductEdit;