module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('questions', {
        id: {
            allowNull: false,
            field: 'id',
            primaryKey: true,
            type: DataTypes.UUID
        },
        question: {
            allowNull: false,
            field: 'question',
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true, // table name same as model name
        timestamps: true
    });
};