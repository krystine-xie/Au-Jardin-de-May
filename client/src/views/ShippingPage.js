import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import CheckoutProgress from "../components/CheckoutProgress";
import styles from "./LoginForm.module.css";
import states from "../constants/states";
import { saveShippingAddress } from "../actions/cartActions";

function ShippingPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [state, setState] = useState(shippingAddress.state);
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const shippingHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, zipCode, country }));
    history.push("/payment");
  };

  return (
    <div>
      <CheckoutProgress step1 step2 />
      <div className={styles.shippingWrapper}>
        <h1 className={styles.header}>ENTER SHIPPING ADDRESS</h1>
        <Form onSubmit={shippingHandler}>
          <Form.Field>
            <input
              required
              name="address"
              placeholder="Enter Address"
              type="text"
              value={address ? address : ""}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <input
              required
              name="city"
              placeholder="Enter City"
              type="text"
              value={city ? city : ""}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <select
              name="state"
              value={state ? state : ""}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="" disabled selected>
                Select State
              </option>
              {states.map((state) => {
                return <option value={state}>{state}</option>;
              })}
            </select>
          </Form.Field>
          <Form.Field>
            <input
              required
              name="zipCode"
              placeholder="Enter Zip Code"
              type="text"
              value={zipCode ? zipCode : ""}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <input
              required
              name="country"
              placeholder="Enter Country"
              type="text"
              value={country ? country : ""}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Field>
          <Button type="submit">PROCEED TO CHECKOUT</Button>
        </Form>
      </div>
    </div>
  );
}

export default withRouter(ShippingPage);
