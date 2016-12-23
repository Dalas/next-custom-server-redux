/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import productListReducer from '../reducers/ProductListReducer';
import shoppingCartReducer from '../reducers/ShoppingCartReducer';
import promoCodeReducer from '../reducers/PromoCodeReducer';


export default createStore(
    combineReducers({
        productList: productListReducer,
        shoppingCart: shoppingCartReducer,
        promoCode: promoCodeReducer
    }),
    applyMiddleware( ReduxThunk )
);