import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

import { FormattedNumber } from "react-intl";

const ProductItem = (props) => {
  const { name, price, description, imageLink, id } = props;

  const locale = localStorage.getItem("locale");

  return (
    <div className={styles.wrapper}>
      <Card as={Link} to={`/collection/${id}`} color="pink">
        <Image src={imageLink} wrapper ui={false} />
        <Card.Content>
          <Card.Header>{name.toUpperCase()}</Card.Header>
          <Card.Meta>
            <span className="date">
              {locale === "en-US" ? "$" : ""}
              <FormattedNumber value={price} style={`currency`} />
              {locale === "fr-FR" ? "$" : ""}
            </span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductItem;
