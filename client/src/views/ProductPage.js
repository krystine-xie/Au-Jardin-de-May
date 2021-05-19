import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, Button } from "semantic-ui-react";
import styles from "./ProductPage.module.css";
import { withRouter, useParams } from "react-router-dom";

import { listProductItem } from "../actions/productActions";

import LoaderSpin from "../components/LoaderSpin";
import MessageAlert from "../components/MessageAlert";

const ProductPage = ({ history }) => {
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();
  const productItem = useSelector((state) => state.productItem);
  const { loading, error, product } = productItem;

  useEffect(() => {
    dispatch(listProductItem(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    console.log(quantity);
    history.push(`/cart/${id}?quantity=${quantity}`);
  };

  return (
    <div>
      {loading ? (
        <LoaderSpin />
      ) : error ? (
        <MessageAlert color="red">{error}</MessageAlert>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <Image size="medium" src={product.image} />
          </div>
          <div className={styles.detailWrap}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h4>Quantity:</h4>
              <div>
                {product.count_in_stock > 0 && (
                  <select
                    className={styles.dropdownQty}
                    name="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(product.count_in_stock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <Button
                onClick={addToCartHandler}
                disabled={product.count_in_stock === 0}
                type="button"
              >
                ${product.price} | ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ProductPage);
