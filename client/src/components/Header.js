import React from 'react';
import styles from './Header.module.css';

const Header = props => {

    return (
        <div style={{backgroundColor: 'white'}}>
            <h1 className={styles.header}>Au Jardin de May</h1>
        </div>
    )

}

export default Header;