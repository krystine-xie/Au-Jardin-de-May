import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import styles from './ShopNow.module.css';
import succulentLink from "../../assets/succulentLink.jpg";
import arrangementLink from '../../assets/arrangementLink.jpg';


class ShopNow extends Component{

    constructor(props) {
        super(props); 
        this.state = {
            hoveredArr: false,
            hoveredSuc: false
        }
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.arrangements}>
                   
                    <h2 className={styles.linkFont}>
                        <a className={styles.link} href="/store"> ARRANGEMENTS </a>
                    </h2>
                </div>
                
                <div className={styles.succulents}>
                   
                    <h2 className={styles.linkFont}>
                        <a className={styles.link} href="/store"> SUCCULENTS </a>
                    </h2>
                </div>
                
            </div>
        )
    }
}

export default ShopNow;