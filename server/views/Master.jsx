import React from 'react';

export default class Master extends React.Component {
    
    render() {
        return (
            <html>
                <head>
                    <title>Title</title>
                    <link rel="stylesheet" type="text/css" href="app.css" />
                </head>
                <body>
                <div className="container">
                    <div id="content"></div>
                </div>
                </body>
                <script src="app.js"></script>
            </html>
        );
    }
};