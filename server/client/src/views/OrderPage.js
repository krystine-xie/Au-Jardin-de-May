import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {
  Grid,
  Image,
  Card,
  List,
  Divider,
  Header,
  Button,
} from "semantic-ui-react";
import { PayPalButton } from "react-paypal-button-v2";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

import styles from "./OrderPage.module.css";

import {
  PAY_ORDER_RESET,
  DELIVER_ORDER_RESET,
} from "../constants/orderConstants";

import {
  getOrderDetails,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../actions/orderActions";
import { FormattedMessage, FormattedNumber } from "react-intl";

function OrderPage({ match, history }) {
  const locale = localStorage.getItem("locale");

  const orderId = match.params.id;
  const dispatch = useDispatch();

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay = useSelector((state) => state.orderPay);
  const { success: successPay, loading: loadingPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { success: successDeliver, loading: loadingDeliver } = orderDeliver;

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
    if (!userInfo) {
      history.push("/login");
    }

    if (
      !order ||
      successPay ||
      order._id !== Number(orderId) ||
      successDeliver
    ) {
      dispatch({ type: PAY_ORDER_RESET });
      dispatch({ type: DELIVER_ORDER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.is_paid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, history, userInfo, order, orderId, successPay, successDeliver]);

  const successPayment = (paymentResult) => {
    dispatch(updateOrderToPaid(orderId, paymentResult));
  };

  const successDeliverHandle = () => {
    dispatch(updateOrderToDelivered(order));
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
            <h1>
              <FormattedMessage id="order_number" />
              {order._id}
            </h1>
            <List>
              <List.Item>
                <Header as="h2">
                  <FormattedMessage id="shipping_address" />:
                </Header>{" "}
                <br />
                <p>
                  <strong>
                    <FormattedMessage id="full_name" />:
                  </strong>{" "}
                  {order.user.name}
                </p>
                <p>
                  <strong>
                    <FormattedMessage id="email" />:{" "}
                  </strong>{" "}
                  <a href={`mailto:${order.user.email}`}>
                    {" "}
                    {order.user.email}{" "}
                  </a>
                </p>
                <p>
                  <strong>
                    <FormattedMessage id="shipping_to" />{" "}
                  </strong>{" "}
                  <br />
                  {order.shipping_address.address} <br />{" "}
                  {order.shipping_address.city},{"    "}{" "}
                  {order.shipping_address.state1} {"    "} <br />
                  {order.shipping_address.zipCode}
                  {"    "} {order.shipping_address.country}
                </p>
                {order.is_delivered ? (
                  <MessageAlert color="green">
                    <FormattedMessage id="delivered_on" />: {order.delivered_at}
                  </MessageAlert>
                ) : (
                  <MessageAlert color="yellow">
                    <FormattedMessage id="not_yet_delivered" />
                  </MessageAlert>
                )}
              </List.Item>
              <Divider />
              <List.Item>
                <Header as="h2">
                  <FormattedMessage id="payment_method" />:
                </Header>
                <p>
                  <strong>
                    <FormattedMessage id="selected_payment" />:{" "}
                  </strong>
                  {order.payment_method}
                </p>
                {order.is_paid ? (
                  <MessageAlert color="green">
                    <FormattedMessage id="paid_on" />: {order.paid_at}
                  </MessageAlert>
                ) : (
                  <MessageAlert color="yellow">
                    <FormattedMessage id="not_yet_paid" />
                  </MessageAlert>
                )}
              </List.Item>
              <Divider />
              <List.Item>
                <Header as="h2" className={styles.rightColHeader}>
                  <FormattedMessage id="order_items" />:
                </Header>
                {order.orderItems.length === 0 ? (
                  <MessageAlert color="red">
                    <FormattedMessage id="order_empty" />
                  </MessageAlert>
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
              <h2 className={styles.h2Summary}>
                <FormattedMessage id="order_summary" />
              </h2>
              <List>
                <List.Item>
                  <Grid celled>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>
                          <FormattedMessage id="items" />:
                        </h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>
                          {locale === "en-US" ? "$" : ""}{" "}
                          <FormattedNumber
                            value={order.itemsPrice}
                            style={`currency`}
                          />{" "}
                          {locale === "fr-FR" ? "$" : ""}
                        </h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>
                          <FormattedMessage id="shipping" />:
                        </h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>
                          {locale === "en-US" ? "$" : ""}{" "}
                          <FormattedNumber
                            value={order.shipping_price}
                            style={`currency`}
                          />{" "}
                          {locale === "fr-FR" ? "$" : ""}
                        </h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TAXES:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>
                          {locale === "en-US" ? "$" : ""}{" "}
                          <FormattedNumber
                            value={order.tax_price}
                            style={`currency`}
                          />{" "}
                          {locale === "fr-FR" ? "$" : ""}
                        </h4>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column width={8}>
                        <h3>TOTAL:</h3>
                      </Grid.Column>
                      <Grid.Column width={8}>
                        <h4>
                          {locale === "en-US" ? "$" : ""}{" "}
                          <FormattedNumber
                            value={order.total_price}
                            style={`currency`}
                          />{" "}
                          {locale === "fr-FR" ? "$" : ""}
                        </h4>
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

                {loadingDeliver && <LoaderSpin />}
                {userInfo &&
                  userInfo.isAdmin &&
                  order.is_paid &&
                  !order.is_delivered && (
                    <List.Item>
                      <Button onClick={successDeliverHandle}>
                        <FormattedMessage id="mark_delivered" />
                      </Button>
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
