import styles from './CreateProduct.module.css';

import { 
    useEffect,
    useState
} from 'react';

import { createProduct } from '../Services/createProduct';

function CreateProduct(){
    const [modal, setModal] = useState("");
    const [form, setForm] = useState({
        name:"",
        price:""
    });

    useEffect(() => {
        setModal(document.getElementById('newProduct'));
    }, [])

    const handleShow = () => {
        modal.style.display = "flex";
    };

    const handleClose = () => {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            handleClose();
        };
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
        }

        create();
    }

    return(
        <>
        <button onClick={handleShow}>
            Add new product
        </button>

        <div id='newProduct' className={styles.modal}> 
                    
            <div className={styles.content}>
                <form className={styles.form} onSubmit={handleSubmit} autoComplete='off'>
                    <label>Name:</label>
                    <input type="text" name='name' value={form.name} onChange={handleChange}/>

                    <label >Price:</label>
                    <input type="text" name='price' value={form.price} onChange={handleChange}/>

                    <div className={styles.buttons}>
                        <button>Cancel</button>

                        <input type="submit" value="Save"/>
                    </div>
                </form>
            </div>

        </div>
        </>
    );
};

export default CreateProduct;