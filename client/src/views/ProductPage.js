import React from 'react';
import { 
    useParams
} from 'react-router-dom';

import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = (props) => {

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