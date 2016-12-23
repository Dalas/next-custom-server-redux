const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const router = require('./controller/main');
const productsApiRouter = require('./controller/api/products');
const discountApiRouter = require('./controller/api/discount');

const app = next({dir: '.', dev: true});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        // simple middleware
        server.use(
            function(req, res, next) {
                res.renderReactComponent = app.render.bind(app);
                next();
            }
        );

        server.use(router);
        server.use('/api/v1', productsApiRouter);
        server.use('/api/v1', discountApiRouter);


        // static serving
        /*server.get('/static/!*', (req, res) => {
            console.log('asd');
            return handle(req, res)
        });
        */

        // next-files serving
        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000')
        })
    });

module.exports = app;