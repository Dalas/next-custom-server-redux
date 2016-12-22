/**
 * Created by yura on 16.12.16.
 */

import React from 'react';
import ShoppingCartItem from './ShoppingCartItemComponent';


export default ({ productsInCart, totalCost, discount, actions }) => {
    return (
        <div className="sc-container">
            <p className="summ-cost">Summ: { parseFloat(totalCost - totalCost * discount / 100).toFixed(2) } $</p>

            { Object.keys( productsInCart ).map(function(key){
                return (
                    <ShoppingCartItem
                        product={ productsInCart[key] }
                        title={ productsInCart[key].title }
                        count={ productsInCart[key].count }
                        maxCount={  productsInCart[key].maxCount }
                        cost={ productsInCart[key].cost }
                        discount={ discount }
                        incrementCount={ () => actions.incrementProductCount( productsInCart[key].id ) }
                        decrementCount={ () => actions.decrementProductCount( productsInCart[key].id ) }
                        key={ key }
                    />
                )
            }) }

            <style jsx>{`
                .sc-container {
                    width: 100%;
                    border: 1px solid black;
                    min-height: 10px;
                    padding: 20px 25px;
                    display: inline-block;
                    vertical-align: top;
                }

                .summ-cost {
                    margin-top: 0;
                }
            `}</style>
        </div>
    )
}