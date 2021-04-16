import { React } from 'react';

import HomePageBanner from '../components/HomePageBanner/HomePageBanner.js';
import Testimonials from '../components/Testimonials/Testimonials';
import KnownFor from '../components/KnownFor/KnownFor';
import ShopNow from '../components/ShopNow/ShopNow';

const HomePage = (props) => {
    // let contextRef = createRef()

    return (
        <div>
            <div>
                <HomePageBanner />
                <ShopNow />
                <KnownFor />
                <Testimonials />
            
            </div>
    
        </div>
            
    )

}

export default HomePage;