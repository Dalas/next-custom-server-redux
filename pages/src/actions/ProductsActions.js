/**
 * Created by yura on 22.12.16.
 */

import { START_FETCHING_PRODUCTS, FINISH_FETCHING_PRODUCTS } from './ActionTypes';
import fetch from 'isomorphic-fetch';


export function startFetchingProducts () {
    return {
        type: START_FETCHING_PRODUCTS
    }
}

export function finishFetchingProducts (products, errorMessage) {
    return {
        type: FINISH_FETCHING_PRODUCTS,
        products: products,
        errorMessage: errorMessage
    }
}

export function fetchProducts (dispatch) {
    return dispatch => {
        dispatch(startFetchingProducts());

        fetch('/api/v1/get-products')
            .then(function(response) {
                if (response.status >= 400) {
                    dispatch(finishFetchingProducts([], "Something went wrong!"));
                }
                else {
                    response.json().then(data => {
                        dispatch(finishFetchingProducts(data.products, ""));
                    });
                }
            },
            function(error){
                dispatch(finishFetchingProducts([], "Something went wrong!"));
            })
    }
}