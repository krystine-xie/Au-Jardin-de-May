import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import LoaderSpin from "../LoaderSpin";
import MessageAlert from "../MessageAlert";

import { listLatestProducts } from "../../actions/productActions";
import styles from "./ProductCarousel.module.css";

import { FormattedMessage } from "react-intl";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const latestProductsList = useSelector((state) => state.latestProductsList);
  const { error, loading, products } = latestProductsList;

  useEffect(() => {
    dispatch(listLatestProducts());
  }, [dispatch]);

  return loading ? (
    <LoaderSpin />
  ) : error ? (
    <MessageAlert color="red">{error}</MessageAlert>
  ) : (
    <div className={styles.carouselWrapper}>
      <h1>
        <FormattedMessage id="latest_products" />
      </h1>
      <Carousel
        pause="hover"
        width={500}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        {products.map((product) => (
          <div key={product._id}>
            <h4>
              {product.name} - (${product.price})
            </h4>
            <Link to={`/collection/${product._id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
