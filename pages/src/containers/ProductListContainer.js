/**
 * Created by yura on 16.12.16.
 */

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductListComponent from '../components/ProductListComponent';
import * as cartActions from '../actions/CartActions';
import * as productsActions from '../actions/ProductsActions';

const mapStateToProps = ( state ) => {
    return {...state.productList, ...state.promoCode};
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        actions: bindActionCreators({ ...cartActions, ...productsActions }, dispatch)
    }
};

const ProductListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)( ProductListComponent );

export default ProductListContainer;