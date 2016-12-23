/**
 * Created by yura on 19.12.16.
 */

import PromoCodeComponent from '../components/PromoCodeComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/PromoCodeActions';

const mapStateToProps = ( state ) => {
    return state.promoCode;
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators( actions, dispatch )
    }
};

const PromoCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( PromoCodeComponent );

export default PromoCodeContainer;
