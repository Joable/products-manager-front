import styles from './CreateProduct.module.css';

import { 
    useEffect,
    useState,
    useContext
} from 'react';

import { ChangeContext } from '../../Context/ChangeContext';
import { createProduct } from '../../Services/createProduct';

import ImageSelector from '../ImageSelector/ImageSelector';
import CategorySelector from '../CategorySelector/CategorySelector';

function CreateProduct(){
    const [modal, setModal] = useState("");
    const [form, setForm] = useState({
        name:"",
        price:"",
        img:""
    });
    const {change, setChange} = useContext(ChangeContext);

    useEffect(() => {
        setModal(document.getElementById('newProduct'));
    }, []);

    useEffect(() => {
        setModal(document.getElementById('newProduct'));
    }, [change]);

    const handleShow = () => {
        modal.style.display = "flex";
    };

    const handleClose = () => {
        modal.style.display = "none";
    };

    const handleClickOutside = (event) => {
        if(event.target == modal) handleClose();
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setForm({
            ...form,
            [target.name] : value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const create = async () =>{
            await createProduct(form);

            setChange(true);

            handleClose();

            setForm({
                name:"",
                price:"",
                img:""
            });
        }

        create();
    }

    return(
        <>
        <button onClick={handleShow}>
            Add new product
        </button>

        <div id='newProduct' className={styles.modal} onClick={handleClickOutside}> 
                    
            <div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit} autoComplete='off'>

                    <div className={styles.selectors}>
                        <ImageSelector form={form} setForm={setForm}/>

                        <div className={styles.inputs}>
                            <label>Name:</label>
                            <input type="text" name='name' value={form.name} onChange={handleChange}/>

                            <label>Price:</label>
                            <input type="number" name='price' value={form.price} onChange={handleChange}/>

                            <CategorySelector/>                            
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button type='button' onClick={handleClose}>Cancel</button>

                        <input type="submit" value="Save"/>
                    </div>
                </form>

            </div>

        </div>
        </>
    );
};

export default CreateProduct;