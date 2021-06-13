import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_ITEM_REQUEST,
  PRODUCT_ITEM_SUCCESS,
  PRODUCT_ITEM_FAIL,
  LATEST_PRODUCTS_REQUEST,
  LATEST_PRODUCTS_SUCCESS,
  LATEST_PRODUCTS_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  CREATE_PRODUCT_RESET,
  UPDATE_PRODUCT_RESET,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
      };

    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const productItemReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_ITEM_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case PRODUCT_ITEM_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case PRODUCT_ITEM_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const latestProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case LATEST_PRODUCTS_REQUEST:
      return { loading: true, products: [], error: "" };

    case LATEST_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload, error: "" };

    case LATEST_PRODUCTS_FAIL:
      return { loading: false, error: action.payload, products: [] };

    default:
      return state;
  }
};

export const createProductReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return { loading: true };

    case CREATE_PRODUCT_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case CREATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case CREATE_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};

export const updateProductReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return { loading: true };

    case UPDATE_PRODUCT_SUCCESS:
      return { loading: false, success: true };

    case UPDATE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    case UPDATE_PRODUCT_RESET:
      return {};

    default:
      return state;
  }
};

export const deleteProductReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return { loading: true };

    case DELETE_PRODUCT_SUCCESS:
      return { loading: false, success: true };

    case DELETE_PRODUCT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
