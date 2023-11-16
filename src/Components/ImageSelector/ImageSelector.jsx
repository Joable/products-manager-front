import styles from './ImageSelector.module.css';

import { images } from '../../assets/Images';

function ImageSelector({form, setForm}) {

    const handleSelection = (event) => {
        const img = event.target.name;

        setForm({
            ...form,
            img : img
        });
    };

    return(
        <div className={styles.selector}> 

            {images.map((image) => <button type='button' onClick={handleSelection} className={styles.image}> <img name={`${image}`} src={`img/${image}`}/> </button>)}

        </div>
    )
};

export default ImageSelector;