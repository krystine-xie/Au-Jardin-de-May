import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer/Footer';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <LoginForm />
            </div>

            <Footer />


        
        </div>
    )

}

export default LoginPage;