import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Header, Button, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import LoaderSpin from "../components/LoaderSpin";
import MessageAlert from "../components/MessageAlert";

import { getAllOrders } from "../actions/orderActions";

import styles from "./UserListPage.module.css";
import { FormattedMessage } from "react-intl";

function OrderListPage({ history }) {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.allOrders);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getAllOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className={styles.wrapper}>
      <Header as="h1">
        <FormattedMessage id="order_list" />
      </Header>
      {loading ? (
        <LoaderSpin />
      ) : error ? (
        <MessageAlert color="red">{error}</MessageAlert>
      ) : (
        <Table size="small" striped selectable color="yellow">
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="full_name" />
              </Table.HeaderCell>
              <Table.HeaderCell>DATE</Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="amount_paid" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="paid" />?
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="delivered" />?
              </Table.HeaderCell>
              <Table.HeaderCell>ACTIONS</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders.map((order) => (
              <Table.Row key={order._id} textAlign="center">
                <Table.Cell>{order._id}</Table.Cell>
                <Table.Cell>{order.user && order.user.name}</Table.Cell>
                <Table.Cell>{order.created_at.substring(0, 10)}</Table.Cell>
                <Table.Cell>${order.total_price}</Table.Cell>
                <Table.Cell>
                  {order.is_paid ? (
                    <Icon name="check" color="green" size="large" />
                  ) : (
                    <Icon name="x" color="red" size="large" />
                  )}
                </Table.Cell>
                <Table.Cell>
                  {order.is_delivered ? (
                    <Icon name="check" color="green" size="large" />
                  ) : (
                    <Icon name="x" color="red" size="large" />
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    basic
                    color="yellow"
                    as={Link}
                    to={`/order/${order._id}`}
                  >
                    <FormattedMessage id="details" />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}

export default withRouter(OrderListPage);
