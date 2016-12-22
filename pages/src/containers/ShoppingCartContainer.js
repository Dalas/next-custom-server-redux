/**
 * Created by yura on 16.12.16.
 */

import ShoppingCartComponent from '../components/ShoppingCartComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/CartActions';

const mapStateToProps = ( state ) => {
    return {...state.shoppingCart, ...state.promoCode};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

const ShoppingCartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ShoppingCartComponent );

export default ShoppingCartContainer;