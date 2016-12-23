const express = require('express');
const router = express.Router();


const products = [
    {
        id: 0,
        title: 'P1',
        imgUrl: '/static/product1.png',
        description: 'Some description',
        cost: 10,
        availableCount: 12,
        addedToCart: false
    },
    {
        id: 1,
        title: 'P2',
        imgUrl: '/static/product2.png',
        description: 'Some description',
        cost: 12,
        availableCount: 12,
        addedToCart: false
    },
    {
        id: 2,
        title: 'P3',
        imgUrl: '/static/product3.png',
        description: 'Some description',
        cost: 20,
        availableCount: 12,
        addedToCart: false
    }
];


router.get('/get-products', function(req, res) {

    return res.send({products: products});
});

module.exports = router;