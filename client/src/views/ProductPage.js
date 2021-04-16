import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
    useParams
} from 'react-router-dom';

import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = ({ match }) => {
// test
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        }

        fetchProduct();
    }, [])

    const { id } = useParams();
    
    return (
        <div>
            <div>
                <ProductDetail id={id} />
            
            </div>
        </div>
    )

}

export default ProductPage;