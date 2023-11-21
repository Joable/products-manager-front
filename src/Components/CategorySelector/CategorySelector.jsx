import styles from './CategorySelector.module.css';

function CategorySelector({handleChange, selected}){
    const options = ["headphones", "keyboards", "phones", "mouses"];

    const formatOption = (option) => {
        const str = option.charAt(0).toUpperCase() + option.slice(1);

        return str;
    }

    const displayOptions = () => {
        return options.map((option) =>(option === selected) ? <option value={option} selected>{formatOption(option)}</option> : <option value={option}>{formatOption(option)}</option>);
    }

    return(
        <>
        <label htmlFor="category">Choose a category:</label>

        <select name='category' onChange={handleChange}>
            {displayOptions()}
        </select>
        </>
    )
}

export default CategorySelector;