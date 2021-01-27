import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HomePageBanner from '../components/HomePageBanner/HomePageBanner.js';
import Testimonials from '../components/Testimonials/Testimonials';
import Footer from '../components/Footer/Footer';

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