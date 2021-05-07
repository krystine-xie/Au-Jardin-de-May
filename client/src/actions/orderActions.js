import axios from 'axios';

import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_SUCCESS
} from '../constants/orderConstants';


export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_ORDER_REQUEST
        })

        const { userLogin: { userInfo } } = getState();

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/orders/add/`,
            order,
            config
        )

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data
        })


    } catch(error) {
        dispatch({
            type: CREATE_ORDER_FAIL, 
            payload: error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
        })
    }
}