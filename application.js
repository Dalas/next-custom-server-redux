const express = require('express');
const next = require('next');

const router = require('./controller/main');
const apiRouter = require('./controller/api/products');

const app = next({dir: '.', dev: true});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // simple middleware
        server.use(
            function(req, res, next) {
                res.renderReactComponent = app.render.bind(app);
                next();
            }
        );

        server.use(router);
        server.use('/api/v1', apiRouter);


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