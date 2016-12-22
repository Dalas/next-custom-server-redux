import React from 'react';
import Product from './ProductComponent';
import LoadingSpiner from './LoadingSpiner';


export default class extends React.Component {
    constructor (props) {
        super(props);

        //console.log('constructing!')
    }

    componentDidMount() {
        this.props.actions.fetchProducts();
    }

    render() {
        //console.log('rendering!');

        let products = this.props.products.map( (product, index) =>
            <Product
                product={ product }
                discount={ this.props.discount }
                key={ index }
                addToCart={() => this.props.actions.addToCart( product ) }
                removeFromCart={() => this.props.actions.removeFromCart( product )}
            />
        );

        let spiner = <LoadingSpiner />;

        return (
            <div className="products-container">
                { this.props.fetching ? spiner : products }

                <style jsx>{`
                .products-container {
                    display: inline-block;
                    width: 700px;
                    min-height: 250px;
                    text-align: justify;
                }
            `}</style>
            </div>
        )
    }
}