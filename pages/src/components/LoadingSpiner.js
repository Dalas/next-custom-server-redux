/**
 * Created by yura on 22.12.16.
 */

import React from 'react';

export default () => {
    return (
        <div className="main">
            <div className="loader"></div>

            <style jsx>{`
                .main {
                    width: 100%;
                    min-height: 100vh;
                    text-align: center;
                }

                .loader{
                    width: 100%;
                    min-height: 100%;
                    background: url(/static/loader.gif) center center no-repeat;
                }
            `}</style>
        </div>
    )
}