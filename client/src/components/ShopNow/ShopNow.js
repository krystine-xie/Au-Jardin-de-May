import React from 'react';
import { Image } from 'semantic-ui-react';
import styles from './ShopNow.module.css';
import succulentLink from "../../assets/succulentLink.jpg";
import arrangementLink from '../../assets/arrangementLink.jpg';


const ShopNow = () => {

    return (
        <div className={styles.wrapper}>
            <Image
                src={arrangementLink}
                as='a'
                size='big'
                href='/store'
            />       
            <Image
                src={succulentLink}
                as='a'
                size='big'
                href='/store'
            />          
        </div>
    )

}

export default ShopNow;