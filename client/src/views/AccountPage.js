import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Segment, Grid, Table } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import styles from "./AccountPage.module.css";

import { getUserDetails, updateUserDetails } from "../actions/userActions";
import { USER_PROFILE_UPDATE_RESET } from "../constants/userConstants";

import { getMyOrders } from "../actions/orderActions";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

const AccountPage = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { success } = userUpdate;

  const orderList = useSelector((state) => state.orderList);
  const { loading: loadingOrders, error: errorOrders, orders } = orderList;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      // checks if user details have been fetched yet or if update was successful!
      if (!user || !user.name || success) {
        // makes sure we clear our previous state first
        dispatch({
          type: USER_PROFILE_UPDATE_RESET,
        });

        // fetches the update user details
        dispatch(getUserDetails("profile"));

        // gets the list of orders for current user
        dispatch(getMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const updateHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
    } else {
      dispatch(
        updateUserDetails({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <Segment>
      <div className={styles.wrapper}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <h2>USER PROFILE</h2>
              {message && <MessageAlert color="red">{message}</MessageAlert>}
              {error && <MessageAlert color="red">{error}</MessageAlert>}
              {loading && <LoaderSpin />}
              <Form onSubmit={updateHandler}>
                <Form.Field>
                  <input
                    required
                    placeholder="Full Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    required
                    placeholder="Your Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Field>
                <Button type="submit">UPDATE DETAILS</Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={12}>
              <h2>MY PAST ORDERS</h2>
              {loadingOrders ? (
                <LoaderSpin />
              ) : errorOrders ? (
                <MessageAlert color="red">{errorOrders}</MessageAlert>
              ) : (
                <Table size="small" striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Date</Table.HeaderCell>
                      <Table.HeaderCell>Total</Table.HeaderCell>
                      <Table.HeaderCell>Paid</Table.HeaderCell>
                      <Table.HeaderCell>Delivered</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {orders.map((order) => (
                      <Table.Row key={order._id}>
                        <Table.Cell>{order._id}</Table.Cell>
                        <Table.Cell>
                          {order.created_at.substring(0, 10)}
                        </Table.Cell>
                        <Table.Cell>${order.total_price}</Table.Cell>
                        <Table.Cell>
                          {order.is_paid
                            ? order.paid_at.substring(0, 10)
                            : "Not Paid"}
                        </Table.Cell>
                        <Table.Cell>
                          {order.delivered_at
                            ? order.delivered_at
                            : "Not Yet Delivered"}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Segment>
  );
};

export default withRouter(AccountPage);
