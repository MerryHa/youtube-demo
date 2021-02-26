import React from 'react';
import styles from './header.module.css';
import SearchForm from './SearchForm/searchForm';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <div className={styles.start}>
                <button className={styles.menuBtn}>
                    <i className="fas fa-bars"></i>
                </button>
                <a className={styles.logo} href='#' onClick={props.onLogoClick}>
                    <img className={styles.logoImage} src="/images/logo.png" alt="logo" />
                    <h4 className={styles.logoTitle}>Youtube</h4>
                </a>
            </div>
            <div className={styles.center}>
                <SearchForm handleSearch={props.youtubeSearch} />
                <button className={styles.btn}><i className="fas fa-microphone"></i></button>
            </div>
            <div className={styles.end}>
                <button className={styles.btn}><i className="fas fa-plus-square"></i></button>
                <button className={styles.btn}><i className="fas fa-th"></i></button>
                <button className={styles.btn}><i className="fas fa-bell"></i></button>
            </div>

        </div>
    );
};

export default Header;