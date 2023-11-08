import styles from './ProductEdit.module.css';

import { useState, useEffect } from 'react';

function ProductEdit({productData, showModal, handleHide}){
    const [modal, setModal] = useState("");

    useEffect(() => {
        setModal(document.getElementById('myModal'));
    }, []);

    useEffect(() => {
        if(showModal === true && modal !== ""){
            onShow()
        }else if(modal !== ""){
            onClose()
        }
    },[showModal])

    const onShow = () => {
        modal.style.display = "block";
    };

    const onClose = () => {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) handleHide();
    };


    return(
        <>

        <div id='myModal' className={styles.modal}> 
            <div className={styles.content}>
                {productData.name}
                {productData.price}
            </div> 
        </div>

        </>
    );
};

export default ProductEdit;