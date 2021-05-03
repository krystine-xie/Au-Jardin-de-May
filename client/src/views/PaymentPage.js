import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import CheckoutProgress from '../components/CheckoutProgress';
import styles from './LoginForm.module.css';
import { savePaymentMethod } from '../actions/cartActions';


function PaymentPage() {
    const cart = useSelector(state => state.cart)
    const { savePaymentMethod } = cart; 

    return (
        <div>
            
        </div>
    )
}

export default PaymentPage
