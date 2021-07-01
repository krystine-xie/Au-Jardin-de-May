import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import styles from "./LoginForm.module.css";

import { register } from "../actions/userActions";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";
import { FormattedMessage, useIntl } from "react-intl";

const RegisterPage = ({ location, history }) => {
  const intl = useIntl();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const registerHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage(intl.formatMessage({ id: "passwords_not_match" }));
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className={styles.loginWrapper}>
      <h1 className={styles.header}>
        <FormattedMessage id="create_account" />
      </h1>
      {message && <MessageAlert color="red">{message}</MessageAlert>}
      {error && <MessageAlert color="red">{error}</MessageAlert>}
      {loading && <LoaderSpin />}
      <Form onSubmit={registerHandler}>
        <Form.Field>
          <input
            required
            placeholder={intl.formatMessage({ id: "your_name" })}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            required
            placeholder={intl.formatMessage({ id: "your_email" })}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            required
            placeholder={intl.formatMessage({ id: "password" })}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <input
            required
            placeholder={intl.formatMessage({ id: "confirm_password" })}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">
          <FormattedMessage id="sign_up" />
        </Button>
      </Form>

      <p className={styles.noAccount}>
        <FormattedMessage id="have_account" />{" "}
        <Link
          to={redirect ? `/login?${redirect}` : "/login"}
          className={styles.link}
        >
          <FormattedMessage id="login" />
        </Link>
      </p>
      <p className={styles.noAccount}>
        <Link to="/store" className={styles.link}>
          <FormattedMessage id="return_to_store" />
        </Link>
      </p>
    </div>
  );
};

export default withRouter(RegisterPage);
