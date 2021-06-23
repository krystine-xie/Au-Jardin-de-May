import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import CheckoutProgress from "../components/CheckoutProgress";
import styles from "./LoginForm.module.css";
import states from "../constants/states";
import { saveShippingAddress } from "../actions/cartActions";
import { FormattedMessage } from "react-intl";

function ShippingPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [state1, setState1] = useState(shippingAddress.state1);
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const locale = localStorage.getItem("locale");

  const shippingHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, zipCode, state1, country }));
    history.push("/payment");
    // console.log(state);
  };

  return (
    <div>
      <CheckoutProgress step1 step2 />
      <div className={styles.shippingWrapper}>
        <h1 className={styles.header}>
          <FormattedMessage id="enter_shipping_address" />
        </h1>
        <Form onSubmit={shippingHandler}>
          <Form.Field>
            <input
              required
              name="address"
              placeholder={locale === "fr-FR" ? "Adresse" : "Enter Address"}
              type="text"
              value={address ? address : ""}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <input
              required
              name="city"
              placeholder={locale === "fr-FR" ? "Ville" : "Enter City"}
              type="text"
              value={city ? city : ""}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <select
              name="state"
              onChange={(e) => setState1(e.target.value)}
              defaultValue={state1 ? state1 : ""}
            >
              <option value="" disabled>
                {locale === "fr-FR" ? "Sélectionnez l'État:" : "Select State:"}
              </option>
              {states.map((s, key) => {
                return (
                  <option key={key} value={s}>
                    {s}
                  </option>
                );
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <input
              required
              name="zipCode"
              placeholder={
                locale === "fr-FR" ? "Code Postale" : "Enter Zip Code"
              }
              type="text"
              value={zipCode ? zipCode : ""}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <input
              required
              name="country"
              placeholder={locale === "fr-FR" ? "Pays" : "Enter Country"}
              type="text"
              value={country ? country : ""}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Field>
          <Button type="submit">
            <FormattedMessage id="proceed_to_checkout" />
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(ShippingPage);
