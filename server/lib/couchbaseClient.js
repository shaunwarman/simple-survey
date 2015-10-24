'use strict';

var couchbase = require('couchbase');
var cluster = new couchbase.Cluster('couchbase://127.0.0.1');
var bucket = cluster.openBucket('NODE_DEV');

var cbClient = {};

cbClient.get = function (document, entity, callback) {
    bucket.get(document, entity, callback);
};

cbClient.upsert = function (document, entity, callback) {
    bucket.upsert(document, entity, callback);
};

module.exports = cbClient;