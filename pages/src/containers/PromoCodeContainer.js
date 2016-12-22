/**
 * Created by yura on 19.12.16.
 */

import PromoCodeComponent from '../components/PromoCodeComponent';
import { connect } from 'react-redux';
import { handlePromoCodeEnter, removePromoCode } from '../actions/CartActions';

const mapStateToProps = ( state ) => {
    return state.promoCode;
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        handlePromoCodeEnter: (promoCode) => dispatch(handlePromoCodeEnter(promoCode)),
        removePromoCode: () => dispatch(removePromoCode())
    }
};

const PromoCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( PromoCodeComponent );

export default PromoCodeContainer;
