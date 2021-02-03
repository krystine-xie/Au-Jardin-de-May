import React from 'react'; 
import { Button, Container, Segment } from 'semantic-ui-react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

import Footer from '../components/Footer/Footer';  
import AccountBar from '../components/AccountBar/AccountBar';
import styles from './AccountPage.module.css';

const AccountPage = (props) => {

    return (
        <div>
            <Segment basic padded>
                <Header />
                <NavBar />
            </Segment>
            <div>
               <h1>Welcome back, Krystine!</h1>
               <div className={styles.wrapperDetail}>
                    <AccountBar />
                    <div className={styles.details}>
                        <h3>ACCOUNT DETAILS</h3>
                        <p>
                            Krystine Xie <br />
                            42 Wallaby Way <br />
                            Sydney, NSW <br />
                            2000, Australia
                        </p> 
                        <Button>
                            MANAGE ADDRESSES
                        </Button>
                    </div>
               </div>  
            </div>

            <Footer />
        
        </div>
    )

}

export default AccountPage;