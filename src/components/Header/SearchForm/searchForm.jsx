import React from 'react';
import styles from './searchForm.module.css';

const SearchForm = (props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const input = inputRef.current.value;
        input && props.handleSearch(input);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className={styles.search} onSubmit={onSubmit}>
            <input
                ref={inputRef}
                placeholder='검색'
                type="text"
                className={styles.searchInput}
            />
            <button className={styles.searchIconBtn} >
                <img className={styles.searchIcon} src="/images/search.png" alt="search-icon" />
            </button>
        </form>
    );
};

export default SearchForm;