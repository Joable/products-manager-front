import styles from './ImageSelector.module.css';

import { images } from '../../assets/Images';

function ImageSelector() {
    return(
        <div className={styles.selector}> 

            {images.map((image) => <button type='button' className={styles.image}> <img src={`img/${image}`}/> </button>)}

        </div>
    )
};

export default ImageSelector;