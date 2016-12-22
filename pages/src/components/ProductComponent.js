/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ product, discount, addToCart, removeFromCart }) => {
    discount = parseFloat(product.cost * discount / 100).toFixed(2);

    return (
        <div className="productWrapper">
            <h2>{ product.title }</h2>
            <div className="imageWrapper">
                <img src={ product.imgUrl } />
            </div>
            <p>Cost: <span className={ discount > 0 ? 'red' : '' }>${ parseFloat(product.cost).toFixed(2) }</span><span className={ discount > 0 ? 'green' : 'hidden' }> ${ parseFloat(product.cost - discount).toFixed(2) } </span></p>
            <p>Available count: { product.availableCount }</p>
            <p>{ product.description }</p>

            <button className={ product.addedToCart ? 'remove' : 'add' } onClick={ product.addedToCart ? removeFromCart : addToCart } >{ product.addedToCart ? 'Remove from cart!' : 'Add to cart!' }</button>

            <style jsx>{`
                h2 {
                    text-align: center;
                    margin-top: 10px;
                    text-decoration: underline;
                }

                p {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }

                button {
                    width: 100%;
                    border: 0;
                    padding: 8px;
                    color: #ffffff;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                }

                button.remove {
                    background-color: #d83838;
                }

                button.add {
                    background-color: #0a9a0a;
                }

                .productWrapper {
                    width: 200px;
                    background: #e2e2e2;
                    padding: 10px;
                    border-radius: 1px;
                    display: inline-block;
                    margin: 0 5px;
                }

                .imageWrapper {
                    width: 200px;
                    height: 200px;
                }

                .imageWrapper img {
                    width: 100%;
                    height: 100%;
                }

                .red {
                    color: #d83838;
                    text-decoration: line-through;
                }

                .green {
                    color: #0a9a0a;
                }

                .hidden {
                    display: none;
                }
            `}</style>
        </div>
    )
}