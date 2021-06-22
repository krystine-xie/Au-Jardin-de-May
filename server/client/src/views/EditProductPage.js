import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button, Form, Header } from "semantic-ui-react";

import MessageAlert from "../components/MessageAlert";
import LoaderSpin from "../components/LoaderSpin";

import {
  listProductItem,
  updateProductDetails,
} from "../actions/productActions";
import {
  UPDATE_PRODUCT_RESET,
  UPDATE_PRODUCT_SUCCESS,
} from "../constants/productConstants";

import styles from "./LoginForm.module.css";
import { FormattedMessage } from "react-intl";

function EditProductPage({ history, match }) {
  const locale = localStorage.getItem("locale");

  const productId = match.params.id;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Arrangement");
  const [color, setColor] = useState("Rainbow");
  const [countInStock, setCountInStock] = useState(0);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productItem);
  const { error, loading, product } = productDetails;

  const updateProduct = useSelector((state) => state.updateProduct);
  const {
    error: updateError,
    loading: updateLoading,
    success: updateSuccess,
  } = updateProduct;

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: UPDATE_PRODUCT_SUCCESS });
      history.push("/admin/productlist");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }

    if (!product.name || product._id !== Number(productId)) {
      dispatch(listProductItem(productId));
    } else {
      setName(product.name);
      setImage(product.image);
      setPrice(product.price);
      setDescription(product.description);
      setCategory(product.category);
      setColor(product.color);
      setCountInStock(product.count_in_stock);
    }
  }, [dispatch, product, history, updateSuccess, productId]);

  const updateProductHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProductDetails({
        _id: product._id,
        name: name,
        image: image,
        price: price,
        description: description,
        category: category,
        color: color,
        count_in_stock: countInStock,
      })
    );
  };

  return (
    <div className={styles.loginWrapper}>
      {updateLoading && <LoaderSpin />}
      {updateError && <MessageAlert>{updateError}</MessageAlert>}
      {error && <MessageAlert color="red">{error}</MessageAlert>}
      {loading && <LoaderSpin />}
      <Header as="h1">
        <FormattedMessage id="edit_product" />
      </Header>
      <Form onSubmit={updateProductHandler}>
        <Form.Field>
          <label className={styles.label}>
            <FormattedMessage id="edit_product_name" />:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>
            {" "}
            <FormattedMessage id="edit_product_url" />:
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>
            {" "}
            <FormattedMessage id="edit_product_price" />:
          </label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>
            <FormattedMessage id="edit_product_description" />:
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>
            {" "}
            <FormattedMessage id="edit_product_category" />:
          </label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category ? category : ""}
          >
            <option value="" disabled>
              {locale === "fr-FR"
                ? "Sélectionner la Catégorie"
                : "Select Category"}
            </option>
            <option value="Arrangement">Arrangement</option>
            <option value="Succulent">Succulent</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label className={styles.label}>
            <FormattedMessage id="edit_product_colour" />:
          </label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className={styles.label}>
            <FormattedMessage id="edit_product_stock" />
          </label>

          <input
            type="number"
            step="1"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">
          <FormattedMessage id="edit_product" />
        </Button>
      </Form>
      <br />
      <Link to="/admin/productlist">
        <FormattedMessage id="return_to_product_list" />
      </Link>
    </div>
  );
}

export default withRouter(EditProductPage);
