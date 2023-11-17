import styles from './CategorySelector.module.css';

function CategorySelector({handleChange}){
    return(
        <>
        <label htmlFor="categories">Choose a category:</label>

        <select name='category' onChange={handleChange}>
            <option value="headphones">Headphones</option>

            <option value="keyboards">Keyboards</option>

            <option value="phones">Phones</option>

            <option value="mouses">Mouses</option>
        </select>
        </>
    )
}

export default CategorySelector;