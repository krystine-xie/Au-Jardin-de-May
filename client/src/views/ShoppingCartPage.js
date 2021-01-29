import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';
import Footer from '../components/Footer/Footer';

import Header from '../components/Header';
import NavBar from '../components/NavBar';


const ShoppingCartPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <p> This is the shopping cart page!</p>
            
            </div>
            <Footer />
        </div>
            
    )

}

export default ShoppingCartPage;