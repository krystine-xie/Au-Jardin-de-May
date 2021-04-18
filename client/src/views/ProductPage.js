import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Image, Button } from 'semantic-ui-react';
import styles from './ProductPage.module.css';
import {useParams} from 'react-router-dom';

import { listProductItem } from '../actions/productActions';

import LoaderSpin from '../components/LoaderSpin';
import MessageAlert from '../components/MessageAlert';

const ProductPage = (props) => {
    const {id} = useParams();
    const dispatch = useDispatch(); 
    const productItem = useSelector(state => state.productItem);
    const { loading, error, product } = productItem;

    useEffect(() => {
        dispatch(listProductItem(id)); 
    
    }, [dispatch]);

    return (
        <div>
            {loading ? 
                <LoaderSpin />
                : error 
                    ? <MessageAlert color="red">{error}</MessageAlert>
                : (
                    <div className={styles.wrapper}>
                        <div className={styles.innerWrapper}>
                            <Image 
                                size='medium' 
                                src={product.image} 
                            />
                        </div>
                        <div className={styles.detailWrap}>
                            <div>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <Button>${product.price} | ADD TO CART</Button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div>
    )

}

export default ProductPage;