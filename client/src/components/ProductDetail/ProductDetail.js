import React from 'react';
import { Image, Button } from 'semantic-ui-react';

import { inventory } from '../../views/StorePage';
import styles from './ProductDetail.module.css';

const ProductDetail = props => {
    const { _id } = props;

    const index = _id - 1; 
    const src = inventory[index].imageLink;

    return (
        <div className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <Image 
                    size='medium' 
                    src={src} 
                />
            </div>
            <div className={styles.detailWrap}>
                <div>
                    <h3>{inventory[index].name.toUpperCase()}</h3>
                    <p>{inventory[index].description}</p>
                    <Button>${inventory[index].price} | ADD TO CART</Button>
                </div>
            </div>
        </div>
    )

}

export default ProductDetail;