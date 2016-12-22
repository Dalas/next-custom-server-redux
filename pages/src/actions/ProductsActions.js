/**
 * Created by yura on 22.12.16.
 */

import { START_FETCHING_PRODUCTS, FINISH_FETCHING_PRODUCTS } from './ActionTypes';
import fetch from 'isomorphic-fetch';


export function startFetchingPropducts () {
    return {
        type: START_FETCHING_PRODUCTS
    }
}

export function finishFetchingPropducts (products, errorMessage) {
    return {
        type: FINISH_FETCHING_PRODUCTS,
        products: products,
        errorMessage: errorMessage
    }
}

export function fetchProducts (dispatch) {
    return dispatch => {
        dispatch(startFetchingPropducts());

        fetch('/api/v1/get-products')
            .then(function(response) {
                console.log(response);
                if (response.status >= 400) {
                    dispatch(finishFetchingPropducts([], "Something went wrong!"));
                }
                    dispatch(finishFetchingPropducts(response.toJSON(), ""));
            },
            function(error){
                console.log(error);
                dispatch(finishFetchingPropducts([], "Something went wrong!"));
            })
    }
}