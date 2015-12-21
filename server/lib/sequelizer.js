var config = require('../../config.json');
var Sequelize = require('sequelize');

var sequelizer = {};

var sequelize = new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
    host: config.mysql.host,
    dialect: 'mysql'
});

var syncDB = function (nsync) {
    
    sequelizer.sequelize.sync({ force: false }).then(function () {
        nsync();
    });
    
};

sequelizer.sequelize = sequelize;
sequelizer.sync = syncDB;
sequelizer.Answers = sequelize.import('../models/Answers.js');
sequelizer.Questions = sequelize.import('../models/Questions.js');
sequelizer.Users = sequelize.import('../models/Users.js');
sequelizer.Votes = sequelize.import('../models/Votes.js');

sequelizer.Questions.hasMany(sequelizer.Answers, { onDelete: 'cascade' });
sequelizer.Answers.belongsTo(sequelizer.Questions, { onDelete: 'cascade' });

sequelizer.Users.hasMany(sequelizer.Votes, { onDelete: 'cascade', hooks: true });
sequelizer.Votes.belongsTo(sequelizer.Users, { onDelete: 'cascade', hooks: true });

module.exports = sequelizer;
