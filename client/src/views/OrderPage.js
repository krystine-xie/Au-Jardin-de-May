import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Image, Card, List, Divider, Header } from "semantic-ui-react";
import { PayPalButton } from "react-paypal-button-v2";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

import styles from "./OrderPage.module.css";

import { getOrderDetails, updateOrderToPaid } from "../actions/orderActions";

function OrderPage({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }

  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Ad-RX7kePCw4gP18qH6hqYuimUeRsbdFbjBggNbEU_nTs1qY7rR2sfn5MDdOBk8Vn5DkfMv0e-0aZ5ln";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };

    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!order || successPay || order._id !== Number(orderId)) {
      dispatch(getOrderDetails(orderId));
    } else if (!order.is_paid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay]);

  const successPayment = (paymentResult) => {
    dispatch(updateOrderToPaid(orderId, paymentResult));
  };

  return loading ? (
    <LoaderSpin />
  ) : error ? (
    <MessageAlert color="red">{error}</MessageAlert>
  ) : (
    <div className={styles.wrapper}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <h1>Order #{order._id}</h1>
            <List>
              <List.Item>
                <Header as="h2">SHIPPING ADDRESS:</Header>
                <p>
                  <strong>Name: </strong> {order.user.name}
                </p>
                <p>
                  <strong>Email: </strong>{" "}
                  <a href={`mailto:${order.user.email}`}>
                    {" "}
                    {order.user.email}{" "}
                  </a>
                </p>
                <p>
                  <strong>Ship To: </strong> <br />
                  {order.shipping_address.address} <br />{" "}
                  {order.shipping_address.city},{"    "}{" "}
                  {order.shipping_address.state1} {"    "} <br />
                  {order.shipping_address.zipCode}
                  {"    "} {order.shipping_address.country}
                </p>
                {order.is_delivered ? (
                  <MessageAlert color="green">
                    Delivered on: {order.delivered_at}
                  </MessageAlert>
                ) : (
                  <MessageAlert color="yellow">Not Yet Delivered</MessageAlert>
                )}
              </List.Item>
              <Divider />
              <List.Item>
                <Header as="h2">PAYMENT METHOD:</Header>
                <p>
                  <strong>Payment Selected: </strong>
                  {order.payment_method}
                </p>
                {order.is_paid ? (
                  <MessageAlert color="green">
                    Paid on {order.paid_at}
                  </MessageAlert>
                ) : (
                  <MessageAlert color="yellow">Not Paid</MessageAlert>
                )}
              </List.Item>
              <Divider />
              <List.Item>
                <Header as="h2" className={styles.rightColHeader}>
                  ORDER ITEMS:
                </Header>
                {order.orderItems.length === 0 ? (
                  <MessageAlert color="red">Order is empty!</MessageAlert>
                ) : (
                  <List>
                    {order.orderItems.map((item, index) => (
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

          <Grid.Column width={6}>
            <Card fluid>
              <h2 className={styles.h2Summary}>ORDER SUMMARY</h2>
              <List>
                <List.Item>
                  <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>ITEMS :</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${order.itemsPrice}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>SHIPPING:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${order.shipping_price}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TAX:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${order.tax_price}</h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TOTAL:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>${order.total_price}</h4>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </List.Item>

                {!order.is_paid && (
                  <List.Item>
                    {loadingPay && <LoaderSpin />}

                    {!sdkReady ? (
                      <LoaderSpin />
                    ) : (
                      <div className={styles.payment}>
                        <PayPalButton
                          amount={order.total_price}
                          onSuccess={successPayment}
                        />
                      </div>
                    )}
                  </List.Item>
                )}

                <List.Item>
                  {error && <MessageAlert color="red">{error}</MessageAlert>}
                </List.Item>
              </List>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default withRouter(OrderPage);
