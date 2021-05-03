
import axios from 'axios';
import { 
    CART_ADD_ITEM, 
    CART_REMOVE_ITEM, 
    SAVE_SHIPPING_ADDRESS, 
    SAVE_SHIPPING_METHOD } 
from '../constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id, 
            name: data.name, 
            image: data.image,
            price: data.price,
            count_in_stock: data.count_in_stock,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id, 
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}


export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_ADDRESS,
        payload: data, 
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export const saveShippingMethod = (data) => (dispatch) => {
    dispatch({
        type: SAVE_SHIPPING_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data));

}




