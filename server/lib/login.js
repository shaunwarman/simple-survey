var config = require('../../config.json');
var login = {};

login.handleAdmin = function (req, callback) {
    if (isAdmin(req)) {
        return callback(null, { success: true });
    }
    callback(new Error('Admin credentials invalid!'), null);
};

login.handleUser = function (req) {
    
};

function usernameMatch(username) {
    return username === config.admin.username;
}

function passwordMatch(password) {
    return password === config.admin.password;
}

function isAdmin(req) {
    var username = req.body.username;
    var password = req.body.password;

    return (usernameMatch(username) && passwordMatch(password));
}

module.exports = login;