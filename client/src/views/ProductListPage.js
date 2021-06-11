import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Header, Button } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

import LoaderSpin from "../components/LoaderSpin";
import MessageAlert from "../components/MessageAlert";
import Paginator from "../components/Paginator";

import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";

import { CREATE_PRODUCT_RESET } from "../constants/productConstants";

import styles from "./UserListPage.module.css";

function ProductListPage({ history, match }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productCreate = useSelector((state) => state.createProduct);
  const {
    success: successCreate,
    error: errorCreate,
    loading: loadingCreate,
    product: newProduct,
  } = productCreate;

  const productDelete = useSelector((state) => state.deleteProduct);
  const {
    success: successDelete,
    error: errorDelete,
    loading: loadingDelete,
  } = productDelete;

  //   const userDelete = useSelector((state) => state.userDelete);
  //   const { success: successDelete } = userDelete;

  useEffect(() => {
    dispatch({ type: CREATE_PRODUCT_RESET });
    if (!userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/products/${newProduct._id}/edit/`);
    } else {
      dispatch(listProducts());
    }
  }, [dispatch, history, userInfo, successDelete, successCreate, newProduct]);

  const createProductHandle = () => {
    dispatch(createProduct());
  };

  const deleteProductHandle = (id) => {
    if (window.confirm(`Are you sure you want to delete product ${id}?`)) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Header as="h1">PRODUCT LIST</Header>
      {loadingDelete && <LoaderSpin />}
      {errorDelete && <MessageAlert color="red">{errorDelete}</MessageAlert>}

      {loadingCreate && <LoaderSpin />}
      {errorCreate && <MessageAlert color="red">{errorCreate}</MessageAlert>}

      {loading ? (
        <LoaderSpin />
      ) : error ? (
        <MessageAlert color="red">{error}</MessageAlert>
      ) : (
        <Table size="small" striped selectable color="red">
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>PRODUCT NAME</Table.HeaderCell>
              <Table.HeaderCell>PRICE</Table.HeaderCell>
              <Table.HeaderCell>CATEGORY</Table.HeaderCell>
              <Table.HeaderCell>STOCK COUNT</Table.HeaderCell>
              <Table.HeaderCell>ACTIONS</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {products.map((product) => (
              <Table.Row key={product._id} textAlign="center">
                <Table.Cell>{product._id}</Table.Cell>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>${product.price}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.count_in_stock}</Table.Cell>
                <Table.Cell>
                  <Button
                    basic
                    icon="edit"
                    color="teal"
                    as={Link}
                    to={`/admin/product/${product._id}`}
                  ></Button>
                  <Button
                    basic
                    icon="trash alternate outline"
                    color="red"
                    onClick={() => deleteProductHandle(product._id)}
                  ></Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}

      <Button icon="plus" color="green" onClick={createProductHandle()}>
        CREATE PRODUCT
      </Button>
    </div>
  );
}

export default withRouter(ProductListPage);
