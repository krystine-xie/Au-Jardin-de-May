import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Button } from 'semantic-ui-react';
import styles from './ProductPage.module.css';
import {useParams} from 'react-router-dom';

const ProductPage = (props) => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${id}`);
            setProduct(data);
        }

        fetchProduct();
    }, [])

    
    return (
        <div>
            {!product &&
                <div>Loading ...</div>
            }

            {product &&
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
        }
            
        </div>
    )

}

export default ProductPage;