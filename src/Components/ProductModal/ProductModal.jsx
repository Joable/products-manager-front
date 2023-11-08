import ProductDisplay from '../ProductDisplay/ProductDisplay';
import styles from './ProductModal.module.css';

import { useState, useEffect } from 'react';

function ProductModal({productData, showModal, handleHide}){
    const [modal, setModal] = useState("");

    /* on mount, saves the 'myModal' element in the 'modal' state */
    useEffect(() => {
        setModal(document.getElementById('myModal'));
    }, []);


    /* when 'showModal' changes, decides if to call the 'onShow' or 'onClose' function */
    useEffect(() => {
        if(showModal === true && modal !== ""){
            onShow()
        }else if(modal !== ""){
            onClose()
        }
    },[showModal])

    const onShow = () => {
        modal.style.display = "flex";
    };

    const onClose = () => {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) handleHide();
    };

    return(
        <div id='myModal' className={styles.modal}> 
            
            <ProductDisplay productData={productData}/>

        </div>
    )
};

export default ProductModal;