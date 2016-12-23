/**
 * Created by yura on 19.12.16.
 */

import { START_FETCHING_PROMOCODE, FINISH_FETCHING_PROMOCODE, REMOVE_PROMO } from '../actions/ActionTypes';
import _ from 'lodash';


const initialState = {
    promoCode: '',
    discount: 0,
    entered: false,
    fetching: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case START_FETCHING_PROMOCODE:
            return Object.assign({}, state, { fetching: true, promoCode: action.promoCode });

        case FINISH_FETCHING_PROMOCODE:
            return Object.assign({}, state, { fetching: false, entered: true, discount: action.discount });

        case REMOVE_PROMO:
            return Object.assign({}, state, { entered: false, promoCode: '', discount: 0 });

        default:
            return state;
    }
}

