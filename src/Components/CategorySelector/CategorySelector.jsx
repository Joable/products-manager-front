import styles from './CategorySelector.module.css';

function CategorySelector(){
    return(
        <>
        <label for="cars">Choose a category:</label>

        <select name='categories'>
            <option value="headphones">Headphones</option>

            <option value="keyboards">Keyboards</option>

            <option value="phones">Phones</option>

            <option value="mouses">Mouses</option>
        </select>
        </>
    )
}

export default CategorySelector;