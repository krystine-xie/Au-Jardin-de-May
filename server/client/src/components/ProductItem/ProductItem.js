import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { name, price, description, imageLink, id } = props;

  return (
    <div className={styles.wrapper}>
      <Card as={Link} to={`/collection/${id}`} color="pink">
        <Image src={imageLink} wrapper ui={false} />
        <Card.Content>
          <Card.Header>{name.toUpperCase()}</Card.Header>
          <Card.Meta>
            <span className="date">${price}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductItem;