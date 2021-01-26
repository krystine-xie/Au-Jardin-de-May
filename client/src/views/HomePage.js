import { React } from 'react';
import {
    Segment,
    Sticky,
    Container
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HomePageBanner from '../components/HomePageBanner.js';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = (props) => {
    // let contextRef = createRef()

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <HomePageBanner />
                <Testimonials />
                <Footer />
            </div>
    
        </div>
            
    )

}

export default HomePage;