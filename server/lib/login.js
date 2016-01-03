var admin = require('../../config.json').admin;
var sequelizer = require('../lib/sequelizer');
var uuid = require('node-uuid');

var login = {};

/**
 * Handle admin login
 * 
 * @param req the request object
 * @param callback the callback
 */
login.handleAdmin = function (req, callback) {
    if (isAdmin(req)) {
        return callback(null, { success: true });
    }
    callback(new Error('Admin credentials invalid!'), null);
};

/**
 * Handle user login
 * 
 * @param req the request object
 * @param callback the callback
 */
login.handleUser = function (req, callback) {
    sequelizer.Users.findAll({
        where: {
            username: req.body.username
        }
    }).then(function (response) {
        if (response.length === 0) {
            req.session.username = req.body.username;
            addUser(req.body.username, function (error) {
                if (error) {
                    return callback(null, { success: false, message: 'User added successfully!' });
                }
                callback(null, { success: true, message: 'Error adding user!' });
            });
        } else {
            loadUser(req.body.username, function (error, result) {
                if (error) {
                    return callback(null, { success: false, message: 'Error loading user!' });
                }
                callback(null, { success: true, message: 'Existing user loaded successfully!' })
            });
        }
    });
};

/**
 * Does username match admin credentials
 * 
 * @param username the login username
 */
function usernameMatch(username) {
    return username === admin.username;
}

/**
 * Does password match admin credentials
 * 
 * @param password the login password
 */
function passwordMatch(password) {
    return password === admin.password;
}

/**
 * Is the login user admin?
 * 
 * @param req the request object
 */
function isAdmin(req) {
    var username = req.body.username;
    var password = req.body.password;

    return (usernameMatch(username) && passwordMatch(password));
}

function loadUser(username, callback) {
    sequelizer.Users.findOne({
        where: {
            username: username
        }
    }).then(function (result) {
        callback(null, { success: true });
    });
}

function addUser(username, callback) {
    var user_id = uuid.v4();
    
    sequelizer.Users.create({
        id: user_id,
        username: username
    }).then(function (result) {
        callback(null, { success: true });
    });
}

module.exports = login;