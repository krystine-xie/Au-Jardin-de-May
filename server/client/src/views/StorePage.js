import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

import FilterBar from "../components/FilterBar/FilterBar";
import LoaderSpin from "../components/LoaderSpin";
import MessageAlert from "../components/MessageAlert";
import ProductItem from "../components/ProductItem/ProductItem";
import Paginator from "../components/Paginator/Paginator";
import styles from "./StorePage.module.css";

import { listProducts } from "../actions/productActions";
import { FormattedMessage } from "react-intl";

const StorePage = ({ history }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <div className={styles.storeWrapper}>
        <h1>
          <FormattedMessage id="shop_all" />
        </h1>
        {loading ? (
          <LoaderSpin />
        ) : error ? (
          <MessageAlert color="red">{error}</MessageAlert>
        ) : (
          <div className={styles.innerWrapper}>
            <FilterBar />
            <div className={styles.productWrapper}>
              {products.map((item) => (
                <ProductItem
                  key={item._id}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  imageLink={item.image}
                />
              ))}
            </div>
          </div>
        )}
        {loading ? (
          ""
        ) : (
          <Paginator page={page} pages={pages} keyword={keyword} />
        )}
      </div>
    </div>
  );
};

export default withRouter(StorePage);
