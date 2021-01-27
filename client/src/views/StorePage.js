import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';

import FilterBar from '../components/FilterBar/FilterBar';
import styles from './StorePage.module.css';


const StorePage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            
            <div className={styles.storeWrapper}>
                <h1>Shop All Products</h1>
                <FilterBar />
            
            </div>
            <Footer />
        
        </div>
    )

}

export default StorePage;