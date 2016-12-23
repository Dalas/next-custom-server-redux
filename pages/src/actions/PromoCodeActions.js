/**
 * Created by yura on 23.12.16.
 */

import { START_FETCHING_PROMOCODE, FINISH_FETCHING_PROMOCODE, REMOVE_PROMO } from './ActionTypes';
import fetch from 'isomorphic-fetch';


export function startFetchingPromoCode (promoCode) {
    return {
        type: START_FETCHING_PROMOCODE,
        promoCode: promoCode
    }
}

export function finishFetchingPromoCode (discount) {
    return {
        type: FINISH_FETCHING_PROMOCODE,
        discount: discount
    }
}

export function removePromoCode () {
    return {
        type: REMOVE_PROMO
    }
}

export function fetchPromoCode (promoCode) {
    return dispatch => {
        dispatch(startFetchingPromoCode(promoCode));

        fetch('/api/v1/get-discount', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ promoCode: promoCode })
        })
            .then(function(response) {
                    if (response.status >= 400) {
                        dispatch(finishFetchingPromoCode(0));
                    }
                    else {
                        response.json().then(data => {
                            dispatch(finishFetchingPromoCode(data.discount));
                        });
                    }
                },
                function(error){
                    dispatch(finishFetchingPromoCode(0));
                })
    }
}