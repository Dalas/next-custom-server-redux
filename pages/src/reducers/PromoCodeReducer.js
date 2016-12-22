/**
 * Created by yura on 19.12.16.
 */

import { ENTER_PROMO, REMOVE_PROMO } from '../actions/ActionTypes';
import _ from 'lodash';

const initialState = {
    promoCode: '',
    discount: 0,
    entered: false
};

const discounts = {
    discount10: 10,
    discount20: 20,
    discount30: 30,
    discount40: 40,
    discount50: 50
};

function getDiscount(promoCode) {
    if (_.has(discounts, promoCode))
        return discounts[ promoCode ];

    else return 0;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ENTER_PROMO:
            return Object.assign({}, state, { promoCode: action.promoCode, discount: getDiscount(action.promoCode), entered: true });

        case REMOVE_PROMO:
            return Object.assign({}, state, { promoCode: '', discount: 0, entered: false });

        default:
            return state;
    }
}

