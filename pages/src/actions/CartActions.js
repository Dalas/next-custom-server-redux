/**
 * Created by yura on 16.12.16.
 */

import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_PRODUCT, DECREMENT_PRODUCT } from './ActionTypes';


export function addToCart (product) {
    return {
        type: ADD_TO_CART,
        product: product
    }
}

export function removeFromCart (product) {
    return {
        type: REMOVE_FROM_CART,
        product: product
    }
}

export function incrementProductCount (id) {
    return {
        type: INCREMENT_PRODUCT,
        id: id
    }
}

export function decrementProductCount (id) {
    return {
        type: DECREMENT_PRODUCT,
        id: id
    }
}