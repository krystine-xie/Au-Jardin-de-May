import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Image, Card, List, Divider } from "semantic-ui-react";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

import styles from "./OrderPage.module.css";

import { getOrderDetails } from "../actions/orderActions";

function OrderPage({ match }) {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  }

  useEffect(() => {
    if (!order || order._id !== Number(orderId)) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, order, orderId]);

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
                <h2>SHIPPING ADDRESS:</h2>
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
                <h2>PAYMENT METHOD:</h2>
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
                <h2>ORDER ITEMS:</h2>
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
