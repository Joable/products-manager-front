import styles from './CreateProduct.module.css';

import { 
    useEffect,
    useState,
    useContext
} from 'react';

import { ChangeContext } from '../Context/ChangeContext';

import { createProduct } from '../Services/createProduct';

function CreateProduct(){
    const [modal, setModal] = useState("");
    const [form, setForm] = useState({
        name:"",
        price:""
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

    const handleClose = (event) => {
        if(event.target == modal) modal.style.display = "none";
    };

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
                price:""
            })
        }

        create();
    }

    return(
        <>
        <button onClick={handleShow}>
            Add new product
        </button>

        <div id='newProduct' className={styles.modal} onClick={handleClose}> 
                    
            <div className={styles.content}>

                <form className={styles.form} onSubmit={handleSubmit} autoComplete='off'>
                    <label>Name:</label>
                    <input type="text" name='name' value={form.name} onChange={handleChange}/>

                    <label >Price:</label>
                    <input type="text" name='price' value={form.price} onChange={handleChange}/>

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