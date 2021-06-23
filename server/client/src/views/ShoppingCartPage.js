import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Image, Button, Card, List, Segment } from "semantic-ui-react";
import { withRouter, useParams, Link } from "react-router-dom";
import styles from "./ProductPage.module.css";

import MessageAlert from "../components/MessageAlert";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { FormattedMessage } from "react-intl";

const ShoppingCartPage = ({ location, history }) => {
  const { id } = useParams();
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push(`/login?redirect=shipping`);
  };

  return (
    <Segment>
      <div className={styles.cartWrapper}>
        <Grid>
          <Grid.Row className={styles.cartRow}>
            <Grid.Column width={12}>
              <h1>
                <FormattedMessage id="shopping_cart" />
              </h1>
              {cartItems.length === 0 ? (
                <MessageAlert color="blue">
                  Your cart is empty <br />
                  <br /> <Link to="/store">Go Back</Link>
                </MessageAlert>
              ) : (
                <List>
                  {cartItems.map((item) => (
                    <List.Item key={item.product}>
                      <Grid>
                        <Grid.Column width={3}>
                          <Image
                            size="tiny"
                            src={item.image}
                            alt={item.name}
                          ></Image>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <List.Content>
                            <List.Header>
                              <Link to={`/collection/${item.product}`}>
                                {item.name}
                              </Link>
                            </List.Header>

                            <List.Description>${item.price}</List.Description>
                          </List.Content>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <select
                            className={styles.dropdownQty}
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {[...Array(item.count_in_stock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                        </Grid.Column>
                        <Grid.Column width={2}>
                          <Button
                            type="button"
                            onClick={() => removeFromCartHandler(item.product)}
                          >
                            <i className="trash alternate icon"></i>
                          </Button>
                        </Grid.Column>
                      </Grid>
                    </List.Item>
                  ))}
                </List>
              )}
            </Grid.Column>
            <Grid.Column width={4}>
              <Card fluid>
                <List>
                  <List.Item>
                    <h2>
                      <FormattedMessage id="subtotal" /> (
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}){" "}
                      {"  "}
                      <FormattedMessage id="items" />
                    </h2>
                    <h3>
                      $
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </h3>
                  </List.Item>
                  <List.Item>
                    <Button
                      type="button"
                      disabled={cartItems.length === 0}
                      fluid
                      onClick={checkoutHandler}
                    >
                      <FormattedMessage id="proceed_to_checkout" />
                    </Button>
                  </List.Item>
                </List>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Segment>
  );
};

export default withRouter(ShoppingCartPage);
