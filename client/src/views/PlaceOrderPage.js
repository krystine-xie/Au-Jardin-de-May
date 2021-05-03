import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Button, Grid, Image, Card, List, Segment } from 'semantic-ui-react';

import CheckoutProgress from '../components/CheckoutProgress';
import MessageAlert from '../components/MessageAlert';

import styles from './LoginForm.module.css';

function PlaceOrderPage() {
    const cart = useSelector(state => state.cart)
    const { shippingAddress, paymentMethod, cartItems } = cart; 



    const placeOrderHandler = (e) => {
        e.preventDefault();
        console.log('Order Placed!');
    }

    return (
        <div>
            <CheckoutProgress step1 step2 step3 step4 />
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <List>
                            <List.Item>
                                <h2>SHIPPING ADDRESS:</h2>
                                <p>
                                    <strong>Ship To: </strong>
                                    {cart.shippingAddress.address}, {cart.shippingAddress.city}, 
                                    {cart.shippingAddress.state} {'    '} {cart.shippingAddress.zipCode}
                                    {'    '} {cart.shippingAddress.country}
                                </p>
                            </List.Item>
                            <hr></hr>
                            <List.Item>
                                <h2>PAYMENT METHOD:</h2>
                                <p>
                                    <strong>Payment Selected: </strong>
                                    {cart.paymentMethod.paymentMethod}
                                </p>
                            </List.Item>
                            <hr />
                            <List.Item>
                                <h2>ORDER ITEMS:</h2>
                                { cart.cartItems.length === 0 ? <MessageAlert color="red">Your cart is empty!</MessageAlert> : (
                                    <List>
                                        {cart.cartItems.map((item, index) => (
                                            <List.Item key={index}>
                                                <Grid celled>
                                                    <Grid.Row>
                                                        <Grid.Column width={4}>
                                                            <Image size="tiny" src={item.image} alt={item.name} rounded centered />
                                                        </Grid.Column>
                                                        <Grid.Column width={6}>
                                                            <Link to={`/collection/${item.id}`}><h3>{item.name}</h3></Link> 
                                                        </Grid.Column>
                                                        <Grid.Column width={6}>
                                                            <h3>{item.quantity} X $ ${item.price} = ${(item.quantity * item.price).toFixed(2)}</h3>
                                                        </Grid.Column>
                                                    
                                                    </Grid.Row>

                                                </Grid>
                                            </List.Item>
                                        ))}
                                    
                                    </List>
                                )
                            
                            }
                            </List.Item>
            
                            
                            
                            
                        </List>
                        
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Card fluid>
                            <h2>ORDER SUMMARY</h2>
                            <List>
                                <List.Item>
                                
                                </List.Item>
                                <List.Item>
                                        <Button
                                            type='button'
                                            disabled={cartItems.length === 0}
                                            fluid
                                            onClick={placeOrderHandler}
                                        >
                                            CONFIRM ORDER
                                        </Button>						
                                    </List.Item>      
                            </List>

                        
                        </Card>
                        
                    </Grid.Column>
                
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default PlaceOrderPage
