module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('questions', {
        id: {
            allowNull: false,
            field: 'id',
            primaryKey: true,
            type: DataTypes.UUID
        },
        text: {
            field: 'text',
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true, // table name same as model name
        timestamps: true
    });
};