import { React } from 'react';
import {
    Segment
} from 'semantic-ui-react';

import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer/Footer';
import RegisterForm from '../components/LoginForm/RegisterForm';

const RegisterPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
                <RegisterForm />
            </div>

            <Footer />


        
        </div>
    )

}

export default RegisterPage;