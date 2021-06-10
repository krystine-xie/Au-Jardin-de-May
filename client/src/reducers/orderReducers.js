import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  PAY_ORDER_REQUEST,
  PAY_ORDER_SUCCESS,
  PAY_ORDER_FAIL,
  PAY_ORDER_RESET,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_RESET,
} from "../constants/orderConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };

    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };

    case ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case PAY_ORDER_REQUEST:
      return {
        loading: true,
      };

    case PAY_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case PAY_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case PAY_ORDER_RESET:
      return {};

    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        loading: true,
      };

    case ORDER_LIST_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };

    case ORDER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ORDER_LIST_RESET:
      return { orders: [] };

    default:
      return state;
  }
};
