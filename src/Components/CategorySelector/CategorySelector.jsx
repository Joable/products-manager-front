import styles from './CategorySelector.module.css';

import { capitalizeFirst } from '../../Utils/CapitalizeFirst';

function CategorySelector({handleChange, selected}){
    const options = ["headphones", "keyboards", "phones", "mouses"];

    
    const displayOptions = () => {
        return options.map((option) =>(option === selected) ? <option value={option} selected>{capitalizeFirst(option)}</option> : <option value={option}>{capitalizeFirst(option)}</option>);
    };

    return(
        <>
        <label htmlFor="category">Choose a category:</label>

        <select name='category' onChange={handleChange}>
            {displayOptions()}
        </select>
        </>
    );
};

export default CategorySelector;