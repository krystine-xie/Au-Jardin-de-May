import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import CheckoutProgress from "../components/CheckoutProgress";
import styles from "./LoginForm.module.css";
import { savePaymentMethod } from "../actions/cartActions";

import { FormattedMessage } from "react-intl";

function PaymentPage({ history }) {
  const locale = localStorage.getItem("locale");

  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const paymentHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <div>
      <CheckoutProgress step1 step2 step3 />
      <div className={styles.paymentWrapper}>
        <Form onSubmit={paymentHandler}>
          <h2>
            <FormattedMessage id="select_payment" />:
          </h2>
          <Form.Field
            label="PayPal"
            control="input"
            type="radio"
            name="paymentMethod"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Form.Field
            label={locale === "fr-FR" ? "Carte de Crédit" : "Credit Card"}
            control="input"
            type="radio"
            name="paymentMethod"
            value="Credit Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <Button type="submit">
            <FormattedMessage id="proceed_to_checkout" />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(PaymentPage);
