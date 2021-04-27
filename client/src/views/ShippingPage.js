import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import MessageAlert from '../components/MessageAlert';
import LoaderSpin from '../components/LoaderSpin';
import styles from './LoginForm.module.css';
import { saveShippingAddress } from '../actions/cartActions';


function ShippingPage({ history }) {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart; 

    const [address, setAddress] = useState(shippingAddress.address); 
    const [city, setCity] = useState(shippingAddress.city);
    const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch(); 

    const shippingHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({address, city, zipCode, country}));
        history.push('/payment');
    }

    return (
        <div>
            <div className={styles.shippingWrapper}>
            <h1 className={styles.header}>ENTER SHIPPING ADDRESS</h1>
            <Form 
                onSubmit={shippingHandler}
            >
                <Form.Field>
                    <input 
                        required
                        placeholder="Enter Address" 
                        type="text"
                        value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Enter City" 
                        type="text"
                        value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Enter Zip Code" 
                        type="text"
                        value={zipCode ? zipCode : ''}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        required
                        placeholder="Enter Country"
                        type="text" 
                        value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Field>
                <Button 
                    type="submit"
                >
                    PROCEED TO CHECKOUT
                </Button>
            </Form>
            </div>
        </div>
    )
}

export default withRouter(ShippingPage);
