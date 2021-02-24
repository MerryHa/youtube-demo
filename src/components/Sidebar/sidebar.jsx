import React from 'react';
import styles from '../Sidebar/sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={styles.sideBar}>
            <button className={styles.btn}>
                <i className="fas fa-home"></i>
                홈
            </button>
            <button className={styles.btn}>
                <i className="fas fa-fire"></i>
                인기
            </button >
            <button className={styles.btn}>
                <i className="fab fa-youtube"></i>
                구독
            </button>
            <button className={styles.btn}>
                <i className="fas fa-archive"></i>
                Originals
            </button>
            <button className={styles.btn}>
                <i className="fas fa-box"></i>
                보관함
            </button>
        </div>
    );
};

export default Sidebar;