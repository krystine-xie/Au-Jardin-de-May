import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer/Footer';
import ContactGrid from '../components/ContactGrid/ContactGrid';

const ContactPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
               <h1>👋🏽 Hi there! Let's chat 🌺</h1>
               <ContactGrid />
            </div>

            <Footer />


        
        </div>
    )

}

export default ContactPage;