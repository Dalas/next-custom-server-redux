/**
 * Created by yura on 22.12.16.
 */

import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';


export default class extends Document {
    static async getInitialProps (ctx) {
        const props = await Document.getInitialProps(ctx);
        return { ...props }
    }

    render() {
        return (
            <html>
                <Head>
                    <title>My page title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    html, body {
                        width: 100%;
                        height: 100%;
                    }
                `}
                </style>
            </html>
        )
    }
}