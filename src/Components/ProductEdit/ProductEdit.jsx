import styles from './ProductEdit.module.css';

import { 
    useState, 
    useContext 
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';

import { editProduct } from '../../Services/editProduct';
import CategorySelector from '../CategorySelector/CategorySelector';

function ProductEdit({product, setDisplayEdit}){
    const [productData, setProductData] = useState(product);
    const {change, setChange} = useContext(ChangeContext);
    const id = product._id;
    
    const handleSwitch = () => {
        setDisplayEdit(false);
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setProductData({
            ...productData,
            [target.name] : value
        })

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const edit = async () => {
            await editProduct(id, productData);

            setChange(true);

            handleSwitch();
        };

        edit();
    };

    return(
        <>
        <div className={styles.image}>
            <img src={`img/${productData.img}`}/>
        </div>

        <form className={styles.formWrapper} onSubmit={handleSubmit} autoComplete='off'>

            <div className={styles.input}>
                <label>Name:</label>
                <input type="text" name="name" value={productData.name} onChange={handleChange}/>

                <label>Price:</label>
                <input type="text" name="price" value={productData.price} onChange={handleChange}/>

                <CategorySelector handleChange={handleChange} selected={productData.category}/>
            </div>

            <div className={styles.buttons}>
                <button type='button' onClick={handleSwitch}>Cancel</button>
                
                <input type='submit' value="Save Changes"/>
            </div>

        </form>
        </>
    );
};

export default ProductEdit;