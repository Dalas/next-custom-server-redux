import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/mainStore';
import ProductList from './src/containers/ProductListContainer';
import ShoppingCart from './src/containers/ShoppingCartContainer';
import PromoCode from './src/containers/PromoCodeContainer';


export default class extends React.Component {
    constructor(props) {
        super(props);

        this.store = store;
    }

    static async getInitialProps({req}) {
        const isServer = !!req;
        return {
            isServer: isServer
        }
    }

    render() {
        return (
            <div className="main">
                <Provider store={ this.store }>
                    <ProductList />
                </Provider>

                <div className="right-sidebar">
                    <Provider store={ this.store }>
                        <ShoppingCart />
                    </Provider>

                    <Provider store={ this.store }>
                        <PromoCode />
                    </Provider>
                </div>

                <style jsx>{`
                    div.main {
                        text-align: justify;
                        width: 1000px;
                        margin: 0 auto;
                    }

                    .right-sidebar {
                        width: 250px;
                        display: inline-block;
                        vertical-align: top;
                    }
                `}</style>
            </div>
        )
    }
}