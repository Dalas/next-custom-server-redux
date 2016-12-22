/**
 * Created by yura on 16.12.16.
 */

import * as actionTypes from '../actions/ActionTypes';


const initialState = {
    productsInCart: {},
    totalCost: 0.0
};

export default function shoppingCartReducer(state = initialState, action) {

    let newState = { ...state, productsInCart: Object.assign({}, state.productsInCart) };

    switch( action.type ) {
        case actionTypes.ADD_TO_CART:
            newState.productsInCart[ action.product.id ] = action.product;
            newState.productsInCart[ action.product.id ].maxCount = action.product.availableCount + 1;
            newState.productsInCart[ action.product.id ].count = 1;

            newState.totalCost += action.product.cost;

            return newState;

        case actionTypes.REMOVE_FROM_CART:
            newState.totalCost -= action.product.cost * action.product.count;

            delete newState.productsInCart[ action.product.id ];
            return newState;

        case actionTypes.INCREMENT_PRODUCT:
            newState.productsInCart[ action.id ].count += 1;

            newState.totalCost += newState.productsInCart[ action.id ].cost;
            return newState;

        case actionTypes.DECREMENT_PRODUCT:
            newState.productsInCart[ action.id ].count -= 1;

            newState.totalCost -= newState.productsInCart[ action.id ].cost;
            return newState;

        default:
            return newState
    }
}