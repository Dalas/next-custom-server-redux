const express = require('express');
const app = require('../application');
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


router.get('/', function(req, res) {

    return res.renderReactComponent(req, res, '/main', {products: products});
});

module.exports = router;