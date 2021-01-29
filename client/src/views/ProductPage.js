import React from 'react';
import { Segment } from 'semantic-ui-react';
import { 
    useParams
} from 'react-router-dom';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';
import ProductDetail from '../components/ProductDetail/ProductDetail';

const ProductPage = (props) => {

    const { id } = useParams();
    
    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <ProductDetail id={id} />
            
            </div>
            <Footer />
        </div>
    )

}

export default ProductPage;