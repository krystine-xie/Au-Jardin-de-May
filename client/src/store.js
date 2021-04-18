import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer, productItemReducer } from './reducers/productReducers';

const reducer = combineReducers({
    productList: productListReducer,
    productItem: productItemReducer
});

const initialState = {
   
};

const middleware = [thunk];

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)));

export default store;

