import ProductDisplay from '../ProductDisplay/ProductDisplay';
import ProductEdit from '../ProductEdit/ProductEdit';
import styles from './ProductModal.module.css';

import { 
    useState,
    useEffect, 
    useContext
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';

import { getProductsById } from '../../Services/getProducts';

function ProductModal({id, showModal, handleHide}){
    const [product, setProduct] = useState({
        name:"",
        price:"",
        img:""
    });
    const [modal, setModal] = useState("");
    const [displayEdit, setDisplayEdit] = useState(false);
    const {change, setChange} = useContext(ChangeContext);

    // fetches the product by id when 'id' or 'change' changes
    useEffect(() => {
        const getProduct = async () =>{
            const response = await getProductsById(id);

            setProduct(response[0]);
        };

        getProduct();
    }, [id, change]);

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
            return <ProductEdit product={product} setDisplayEdit={setDisplayEdit}/>
        } else{
            return <ProductDisplay product={product} setDisplayEdit={setDisplayEdit} handleClose={handleClose}/>
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