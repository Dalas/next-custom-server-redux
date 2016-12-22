/**
 * Created by yura on 16.12.16.
 */

import React from 'react';


export default ({ product, discount, incrementCount, decrementCount }) => {
    let cost = parseFloat(product.cost - product.cost * discount / 100).toFixed(2);

    return (
        <div>
            <p className="title">{ product.title }</p>
            <p>Cost: ${ parseFloat(cost).toFixed(2) }</p>
            <p>
                Count:
                &nbsp;{ product.count > 1 ? <i className="fa fa-minus-square" onClick={ decrementCount } /> : ''}
                &nbsp;{ product.count }
                &nbsp;{ product.count < product.maxCount ? <i className="fa fa-plus-square" onClick={ incrementCount } /> : ''}
            </p>
            <p>Total cost: ${ parseFloat(product.cost * product.count).toFixed(2) }</p>

            <style jsx>{`
                i {
                    cursor: pointer;
                }
                p {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }
                .title {
                    text-decoration: underline;
                    font-size: 18px;
                    font-weight: bold;
                }
            `}</style>
        </div>
    )
}