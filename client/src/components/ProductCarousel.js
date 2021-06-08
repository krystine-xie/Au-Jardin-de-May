import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import LoaderSpin from "./LoaderSpin";
import MessageAlert from "./MessageAlert";

import { listLatestProducts } from "../actions/productActions";

function ProductCarousel() {
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
    <Carousel pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/collection/${product._id}`}>
            <Image src={product.image} alt={product.name} />
            <Carousel.Caption className="carousel.caption">
              <h4>
                {product.name} - (${product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
