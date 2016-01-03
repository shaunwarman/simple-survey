import React from 'react';

export default class Question extends React.Component {

    render() {
        
        return (
            <html>
                <head>
                    <title>Question</title>
                    <link rel="stylesheet" type="text/css" href="../app.css" />
                </head>
                <body>
                    <div className="container">
                        <div id="content"></div>
                    </div>
                </body>
                <script src="../app.js"></script>
                <script dangerouslySetInnerHTML={{__html: `
                    window._question = ` + JSON.stringify(this.props.question) + `;
                    window._options = ` + JSON.stringify(this.props.options) + `;`
                    }}
                />
            </html>
        );
    }
};