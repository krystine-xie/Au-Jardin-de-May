import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Grid, Image, Card, List, Divider } from "semantic-ui-react";

import CheckoutProgress from "../components/CheckoutProgress";
import MessageAlert from "../components/MessageAlert";

import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

function PlaceOrderPage({ history }) {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success } = orderCreate;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  cart.shippingPrice = (cart.itemsPrice > 60 ? 0 : 10).toFixed(2);
  cart.tax = Number(cart.itemsPrice * 0.0725).toFixed(2);
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.tax)
  ).toFixed(2);

  if (!cart.paymentMethod) {
    history.push("/payment");
  }

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, success, history, order]);

  const placeOrderHandler = (e) => {
    e.preventDefault();
    console.log(cart.shippingAddress);
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        tax: cart.tax,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

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
                  <strong>Ship To: </strong> <br />
                  {cart.shippingAddress.address} <br />{" "}
                  {cart.shippingAddress.city},{"    "}{" "}
                  {cart.shippingAddress.state1} {"    "} <br />
                  {cart.shippingAddress.zipCode}
                  {"    "} {cart.shippingAddress.country}
                </p>
              </List.Item>
              <Divider />
              <List.Item>
                <h2>PAYMENT METHOD:</h2>
                <p>
                  <strong>Payment Selected: </strong>
                  {cart.paymentMethod}
                </p>
              </List.Item>
              <Divider />
              <List.Item>
                <h2>ORDER ITEMS:</h2>
                {cart.cartItems.length === 0 ? (
                  <MessageAlert color="red">Your cart is empty!</MessageAlert>
                ) : (
                  <List>
                    {cart.cartItems.map((item, index) => (
                      <List.Item key={index}>
                        <Grid celled>
                          <Grid.Row>
                            <Grid.Column width={4}>
                              <Image
                                size="tiny"
                                src={item.image}
                                alt={item.name}
                                rounded
                                centered
                              />
                            </Grid.Column>
                            <Grid.Column width={6}>
                              <Link to={`/collection/${item.id}`}>
                                <h3>{item.name}</h3>
                              </Link>
                            </Grid.Column>
                            <Grid.Column width={6}>
                              <h3>
                                {item.quantity} x $ ${item.price} = $
                                {(item.quantity * item.price).toFixed(2)}
                              </h3>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </List.Item>
                    ))}
                  </List>
                )}
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column width={5}>
            <Card fluid>
              <h2>ORDER SUMMARY</h2>
              <List>
                <List.Item>
                  <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>ITEM:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${cart.itemsPrice}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>SHIPPING:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${cart.shippingPrice}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TAX:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${cart.tax}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TOTAL:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${cart.totalPrice}</h4>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </List.Item>

                <List.Item>
                  {error && <MessageAlert color="red">{error}</MessageAlert>}
                </List.Item>

                <List.Item>
                  <Button
                    type="button"
                    disabled={cart.cartItems.length === 0}
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
  );
}

export default withRouter(PlaceOrderPage);
