const express = require('express');
const router = express.Router();


const discounts = {
    discount10: 10,
    discount20: 20,
    discount30: 30,
    discount40: 40,
    discount50: 50
};


router.post('/get-discount', function(req, res) {
    let promoCode = req.body.promoCode;
    let discount = promoCode in discounts ? discounts[ promoCode ] : 0;

    return res.send({discount: discount});
});

module.exports = router;