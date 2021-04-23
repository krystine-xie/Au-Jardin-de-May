import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Image, Button, Card, List, Segment } from 'semantic-ui-react';
import {withRouter, useParams, Link} from 'react-router-dom';
import styles from './ProductPage.module.css';

import MessageAlert from '../components/MessageAlert';
import { addToCart, removeFromCart } from '../actions/cartActions';

const ShoppingCartPage = ({ location, history }) => {
    const { id } = useParams();
    const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, quantity));
        }
    }, [dispatch, id, quantity])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        history.push(`/login?redirect=shipping`);
    }

    return (
        <Segment>
            <div className={styles.cartWrapper}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <h1>SHOPPING CART</h1> 
                            { cartItems.length === 0 ? (
                                <MessageAlert color='blue' >
                                    Your cart is empty <Link to='/store'>Go Back</Link>
                                </MessageAlert>
                            ) : (
                                <List>
                                    {cartItems.map(item => (
                                        <List.Item key={item.product}>
                                            <Grid>
                                                <Grid.Column width={3}>
                                                    <Image size="tiny" src={item.image} alt={item.name}></Image>
                                                </Grid.Column>
                                                <Grid.Column width={4}>
                                                    <List.Content>
                                                        <List.Header>
                                                            <Link to={`/collection/${item.product}`}>{item.name}</Link>
                                                        </List.Header>

                                                        <List.Description>
                                                            ${item.price}
                                                        </List.Description>
                                                    </List.Content>
                                                </Grid.Column>
                                                <Grid.Column width={2}>
                                                    <select 
                                                        className={styles.dropdownQty} 
                                                        name="quantity" 
                                                        value={item.quantity} 
                                                        onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                                    >
                                                        {
                                                            [...Array(item.count_in_stock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))
                                                        }
                                                    </select>
                                                
                                                </Grid.Column>
                                                <Grid.Column width={1}>
                                                    <Button
                                                        type='button'
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                    >
                                                        <i class="trash alternate icon"></i>
                                                    </Button>
                                                </Grid.Column> 
                                            </Grid>                                        
                                        </List.Item>
                                    )

                                    )}

                                
                                </List>
                                
                            ) }

                        
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Card fluid>
                                <List>
                                    <List.Item>
                                        <h2>SUBTOTAL ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) ITEMS:</h2>
                                        <h3>${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
                                    </List.Item>    
                                    <List.Item>
                                        <Button
                                            type='button'
                                            disabled={cartItems.length === 0}
                                            fluid
                                            onClick={checkoutHandler}
                                        >
                                            Proceed to Checkout
                                        </Button>						
                                    </List.Item>          
                                </List>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Segment>
    )

}

export default withRouter(ShoppingCartPage);