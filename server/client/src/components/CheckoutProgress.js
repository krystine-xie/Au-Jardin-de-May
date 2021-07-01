import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import { useIntl } from "react-intl";

function CheckoutProgress({ step1, step2, step3, step4 }) {
  const intl = useIntl();

  const locale = localStorage.getItem("locale");
  return (
    <Menu fluid widths={4}>
      {step1 ? (
        <Menu.Item
          as={NavLink}
          to="/login"
          name={intl.formatMessage({ id: "login" })}
        />
      ) : (
        <Menu.Item disabled name={intl.formatMessage({ id: "login" })} />
      )}

      {step2 ? (
        <Menu.Item
          as={NavLink}
          to="/shipping"
          name={intl.formatMessage({ id: "shipping" })}
        />
      ) : (
        <Menu.Item disabled name={intl.formatMessage({ id: "shipping" })} />
      )}

      {step3 ? (
        <Menu.Item
          as={NavLink}
          to="/payment"
          name={intl.formatMessage({ id: "payment" })}
        />
      ) : (
        <Menu.Item disabled name={intl.formatMessage({ id: "payment" })} />
      )}

      {step4 ? (
        <Menu.Item
          as={NavLink}
          to="/placeorder"
          name={intl.formatMessage({ id: "place_order" })}
        />
      ) : (
        <Menu.Item disabled name={intl.formatMessage({ id: "place_order" })} />
      )}
    </Menu>
  );
}

export default CheckoutProgress;
