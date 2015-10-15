'use strict';

var React = require('react');

module.exports = function (req, res, next) {
    var html = 'Helloooo';
    res.send(wrapWithLayout(html));
};

function wrapWithLayout(html) {
    return '<html><head><title>Isomorphic React!</title></head>' +
        '<body>' + html + '</body>' +
        '<script src="app.js"></script>' +
        '</html>';
}