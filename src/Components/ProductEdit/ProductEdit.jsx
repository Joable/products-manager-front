import styles from './ProductEdit.module.css';

import { 
    useState, 
    useContext 
} from 'react';

import { editProduct } from '../../Services/editProduct';
import { ChangeContext } from '../../Context/ChangeContext';

function ProductEdit({productData, setDisplayEdit}){
    const [product, setProduct] = useState(productData);
    const {change, setChange} = useContext(ChangeContext);
    const id = productData._id;
    
    const handleSwitch = () => {
        setDisplayEdit(false);
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setProduct({
            ...product,
            [target.name] : value
        })

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const edit = async () => {
            await editProduct(id, product);

            setChange(true);

            handleSwitch();
        };

        edit();
    };

    return(
        <>
        <div className={styles.image}>
            <img src={productData.img}/>
        </div>

        <form className={styles.formWrapper} onSubmit={handleSubmit} autoComplete='off'>

            <div className={styles.input}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange}/>

                <label htmlFor="">Price:</label>
                <input type="text" name="price" value={product.price} onChange={handleChange}/>
            </div>

            <div className={styles.buttons}>
                <button onClick={handleSwitch}>Cancel</button>
                
                <input type='submit' value="Save Changes"/>
            </div>

        </form>
        </>
    );
};

export default ProductEdit;