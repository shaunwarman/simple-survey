import React from 'react';

export default class Question extends React.Component {

    render() {
        return (
            <html>
            <head>
                <title>Question</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="../app.css" />
            </head>
            <body>
            <div className="container">
                <div id="content"></div>
            </div>
            </body>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="../app.js"></script>
            </html>
        );
    }
};