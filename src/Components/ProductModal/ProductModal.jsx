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

function ProductModal({id, showModal, setShowModal}){
    const [product, setProduct] = useState({
        name:"",
        price:"",
        img:""
    });
    const [modal, setModal] = useState("");
    const [displayEdit, setDisplayEdit] = useState(false);
    const {change, setChange} = useContext(ChangeContext);
    
    /* on mount, saves the 'myModal' element in the 'modal' state */
    useEffect(() => setModal(document.getElementById('myModal')), []);

    // fetches the product by id when 'id' or 'change' changes
    useEffect(() => {
        const getProduct = async () =>{
            const response = await getProductsById(id);

            setProduct(response[0]);

        };
        
        if(id) getProduct();
    }, [id, change]);
    
    
    /* when 'showModal' changes, decides if to call the 'handleShow' or 'handleClose' function */
    useEffect(() => {
        if(showModal === true && modal !== ""){
            modal.style.display = "flex";
            
        }else if(modal !== ""){
            modal.style.display = "none";
            
            setDisplayEdit(false);
        };
    },[showModal]);

    const handleClose = (event) => {
        if(event.target == modal) setShowModal(false);
    }

    const switchDisplay = () => {
        if(displayEdit){
            return <ProductEdit product={product} setDisplayEdit={setDisplayEdit}/>
        } else{
            return <ProductDisplay product={product} setDisplayEdit={setDisplayEdit} setShowModal={setShowModal}/>
        }
    }

    return(
        <div id='myModal' className={styles.modal} onClick={handleClose}> 
            
            <div className={styles.content}>
                {switchDisplay()}
            </div>

        </div>
    )
};

export default ProductModal;