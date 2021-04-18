import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterBar from '../components/FilterBar/FilterBar';
import LoaderSpin from '../components/LoaderSpin';
import MessageAlert from '../components/MessageAlert';
import ProductItem from '../components/ProductItem/ProductItem';
import styles from './StorePage.module.css';

import { listProducts } from '../actions/productActions';

const StorePage = (props) => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);

    const { error, loading, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
       
    }, [dispatch])

    return (
        <div>      
            <div className={styles.storeWrapper}>
                <h1>Shop All Products</h1>
                {loading ? <LoaderSpin />
                    : error ? <MessageAlert color="red">{error}</MessageAlert>
                    : 
                    <div className={styles.innerWrapper}>
                        <FilterBar />
                        <div className={styles.productWrapper}>
                            {
                                products.map(item => 
                                    <ProductItem
                                        key={item._id} 
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        description={item.description}
                                        imageLink={item.image}
                                    />

                                )
                            }
                        </div>
                
                    </div>
                }
                
                
            
            </div>
        
        </div>
    )

}

export default StorePage;