module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('users', {
        id: {
            allowNull: false,
            field: 'id',
            primaryKey: true,
            type: DataTypes.UUID
        },
        username: {
            allowNull: true,
            field: 'username',
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true, // table name same as model name
        timestamps: true
    });
};