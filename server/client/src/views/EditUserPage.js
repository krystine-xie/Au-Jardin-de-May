import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Checkbox, Form, Header } from "semantic-ui-react";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

import { getUserDetails, updateUser } from "../actions/userActions";
import {
  USER_UPDATE_RESET,
  USER_UPDATE_SUCCESS,
} from "../constants/userConstants";

import styles from "./LoginForm.module.css";

import { FormattedMessage, useIntl } from "react-intl";

function EditUserPage({ history, match }) {
  const intl = useIntl();

  const userId = match.params.id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, loading, user } = userDetails;

  const userUpdateAsAdmin = useSelector((state) => state.userUpdateAsAdmin);
  const {
    error: updateError,
    loading: updateLoading,
    success: updateSuccess,
  } = userUpdateAsAdmin;

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: USER_UPDATE_SUCCESS });
      history.push("/admin/userlist");
      dispatch({ type: USER_UPDATE_RESET });
    }

    if (!user.name || user._id !== Number(userId)) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, user, userId, history, updateSuccess]);

  const updateHandler = (e) => {
    e.preventDefault();

    console.log({
      _id: user._id,
      name: name,
      email: email,
      isAdmin: isAdmin,
    });

    dispatch(
      updateUser({
        _id: user._id,
        name: name,
        email: email,
        isAdmin: isAdmin,
      })
    );
  };

  return (
    <div className={styles.loginWrapper}>
      <Header as="h1">
        <FormattedMessage id="edit_user" />
      </Header>
      {updateLoading && <LoaderSpin />}
      {updateError && <MessageAlert>{updateError}</MessageAlert>}
      {error && <MessageAlert color="red">{error}</MessageAlert>}
      {loading && <LoaderSpin />}
      <Form onSubmit={updateHandler}>
        <Form.Field>
          <input
            placeholder={intl.formatMessage({ id: "edit_user_name" })}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            placeholder={intl.formatMessage({ id: "edit_user_email" })}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label={intl.formatMessage({ id: "make_admin" })}
            checked={isAdmin}
            onChange={(e) => setIsAdmin(!isAdmin)}
          />
        </Form.Field>
        <Button type="submit">
          <FormattedMessage id="update_details" />
        </Button>
      </Form>
      <br />

      <Link to="/admin/userlist">
        <FormattedMessage id="return_to_user_list" />
      </Link>
    </div>
  );
}

export default withRouter(EditUserPage);
