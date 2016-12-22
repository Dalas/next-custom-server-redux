/**
 * Created by yura on 16.12.16.
 */

import { createStore, combineReducers } from 'redux';
import productListReducer from '../reducers/ProductListReducer';
import shoppingCartReducer from '../reducers/ShoppingCartReducer';
import promoCodeReducer from '../reducers/PromoCodeReducer';


export default createStore(
    combineReducers({
        productList: productListReducer,
        shoppingCart: shoppingCartReducer,
        promoCode: promoCodeReducer
    })
);