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

function EditProductPage({ history, match }) {
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
      <Header as="h1">EDIT PRODUCT</Header>
      <Form onSubmit={updateProductHandler}>
        <Form.Field>
          <label className={styles.label}>Edit Product Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>Edit Product Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>Edit Product Price:</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>Edit Product Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </Form.Field>

        <Form.Field>
          <label className={styles.label}>Edit Product Category:</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            defaultValue={category ? category : ""}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Arrangement">Arrangement</option>
            <option value="Succulent">Succulent</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label className={styles.label}>Edit Product Color:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label className={styles.label}>Edit Product Stock:</label>

          <input
            type="number"
            step="1"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          />
        </Form.Field>
        <Button type="submit">Edit Product</Button>
      </Form>
      <br />
      <Link to="/admin/productlist">Go Back to Product List</Link>
    </div>
  );
}

export default withRouter(EditProductPage);
