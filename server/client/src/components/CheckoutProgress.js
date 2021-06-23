import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

function CheckoutProgress({ step1, step2, step3, step4 }) {
  const locale = localStorage.getItem("locale");
  return (
    <Menu fluid widths={4}>
      {step1 ? (
        <Menu.Item
          as={NavLink}
          to="/login"
          name={locale === "fr-FR" ? "OUVRIR UNE SESSION" : "LOGIN"}
        />
      ) : (
        <Menu.Item
          disabled
          name={locale === "fr-FR" ? "OUVRIR UNE SESSION" : "LOGIN"}
        />
      )}

      {step2 ? (
        <Menu.Item
          as={NavLink}
          to="/shipping"
          name={locale === "fr-FR" ? "LIVRAISON" : "SHIPPING"}
        />
      ) : (
        <Menu.Item
          disabled
          name={locale === "fr-FR" ? "LIVRAISON" : "SHIPPING"}
        />
      )}

      {step3 ? (
        <Menu.Item
          as={NavLink}
          to="/payment"
          name={locale === "fr-FR" ? "PAIEMENT" : "PAYMENT"}
        />
      ) : (
        <Menu.Item
          disabled
          name={locale === "fr-FR" ? "PAIEMENT" : "PAYMENT"}
        />
      )}

      {step4 ? (
        <Menu.Item as={NavLink} to="/placeorder" name="PLACE ORDER" />
      ) : (
        <Menu.Item
          disabled
          name={locale === "fr-FR" ? "PASSER LA COMMANDE" : "PLACE ORDER"}
        />
      )}
    </Menu>
  );
}

export default CheckoutProgress;
