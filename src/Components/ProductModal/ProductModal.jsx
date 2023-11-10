import ProductDisplay from '../ProductDisplay/ProductDisplay';
import ProductEdit from '../ProductEdit/ProductEdit';
import styles from './ProductModal.module.css';

import { useState, useEffect } from 'react';

function ProductModal({productData, showModal, handleHide}){
    const [modal, setModal] = useState("");
    const [displayEdit, setDisplayEdit] = useState(false)

    /* on mount, saves the 'myModal' element in the 'modal' state */
    useEffect(() => setModal(document.getElementById('myModal')), []);


    /* when 'showModal' changes, decides if to call the 'handleShow' or 'handleClose' function */
    useEffect(() => {
        if(showModal === true && modal !== ""){
            handleShow();
        }else if(modal !== ""){
            handleClose();
        }
    },[showModal]);

    const handleShow = () => {
        modal.style.display = "flex";
    };

    const handleClose = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            handleHide();

            setDisplayEdit(false);
        };
    };

    const switchDisplay = () => {
        if(displayEdit){
            return <ProductEdit productData={productData} setDisplayEdit={setDisplayEdit}/>
        } else{
            return <ProductDisplay id={productData._id} setDisplayEdit={setDisplayEdit} handleClose={handleClose}/>
        }
    }

    return(
        <div id='myModal' className={styles.modal}> 
            
            <div className={styles.content}>
                {switchDisplay()}
            </div>

        </div>
    )
};

export default ProductModal;