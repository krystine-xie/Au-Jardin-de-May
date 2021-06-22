import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Header, Button } from "semantic-ui-react";

import LoaderSpin from "../components/LoaderSpin";
import MessageAlert from "../components/MessageAlert";

import { getUserList, deleteUser } from "../actions/userActions";
import { Link, withRouter } from "react-router-dom";

import styles from "./UserListPage.module.css";

import { FormattedMessage } from "react-intl";

function UserListPage({ history }) {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, userList: users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(getUserList());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteUserHandle = (id) => {
    if (window.confirm(`Are you sure you want to delete user ${id}?`)) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header as="h1">
        <FormattedMessage id="user_list" />
      </Header>
      {loading ? (
        <LoaderSpin />
      ) : error ? (
        <MessageAlert color="red">{error}</MessageAlert>
      ) : (
        <Table size="small" striped selectable color="teal">
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="full_name" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="email" />
              </Table.HeaderCell>
              <Table.HeaderCell>
                <FormattedMessage id="admin_user" />?
              </Table.HeaderCell>
              <Table.HeaderCell>ACTIONS</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user.id} textAlign="center">
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.isAdmin ? "Yes" : "No"}</Table.Cell>
                <Table.Cell>
                  <Button
                    basic
                    icon="edit"
                    color="teal"
                    as={Link}
                    to={`/admin/users/${user.id}/edit/`}
                  ></Button>
                  <Button
                    basic
                    icon="user delete"
                    color="red"
                    onClick={() => deleteUserHandle(user.id)}
                  ></Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </div>
  );
}

export default withRouter(UserListPage);
