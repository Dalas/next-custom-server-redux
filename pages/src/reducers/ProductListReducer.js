/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';
import _ from 'lodash';


const initialState = {
    products: [],
    fetching: true,
    errorMessage: ''
};

export default function productListReducer(state = initialState, action) {

    let newState = { products: state.products.slice() };
    let product;

    switch( action.type ) {
        case actionTypes.ADD_TO_CART:

            product = _.find(newState.products, { id: action.product.id });
            product.availableCount -= 1;
            product.addedToCart = true;

            return newState;

        case actionTypes.REMOVE_FROM_CART:
            product = _.find(newState.products, { id: action.product.id });
            product.availableCount += action.product.count;
            product.addedToCart = false;
            return newState;

        case actionTypes.INCREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount -= 1;
            return newState;

        case actionTypes.DECREMENT_PRODUCT:
            product = _.find(newState.products, { id: action.id });
            product.availableCount += 1;
            return newState;

        case actionTypes.START_FETCHING_PRODUCTS:
            return { ...state, fetching: true, errorMessage: '' };

        case actionTypes.FINISH_FETCHING_PRODUCTS:
            return { ...state, fetching: false, products: action.products, errorMessage: action.errorMessage };

        default:
            return state
    }
}