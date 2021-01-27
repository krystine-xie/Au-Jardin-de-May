import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';


const AboutPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <h1>Salut, bienvenue au Jardin de May!</h1>
            
            </div>
            <Footer />
        
        </div>
    )

}

export default AboutPage;