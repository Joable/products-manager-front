import styles from './ImageSelector.module.css';

import { useState } from 'react';

import { images } from '../../assets/Images';

function ImageSelector({form, setForm}) {
    const [selected, setSelected] = useState("");

    const handleSelection = (event) => {
        const img = event.target.name;

        setForm({
            ...form,
            img : img
        });

        setSelected(img)
    };

    const isSelected = (image) =>{
        if(selected === image) return styles.selected;

        return styles.image;
    }

    return(
        <div className={styles.selector}> 

            {images.map((image) => <button type='button' onClick={handleSelection} className={isSelected(image)}> <img name={`${image}`} src={`img/${image}`}/> </button>)}

        </div>
    )
};

export default ImageSelector;