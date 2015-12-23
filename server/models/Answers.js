module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('answers', {
        id: {
            allowNull: false,
            field: 'id',
            primaryKey: true,
            type: DataTypes.UUID
        },
        question_id: {
            allowNull: false,
            field: 'question_id',
            type: DataTypes.UUID
        },
        option: {
            allowNull: false,
            field: 'option',
            type: DataTypes.STRING
        },
        count: {
            allowNull: false,
            field: 'count',
            type: DataTypes.INTEGER
        }
    }, {
        freezeTableName: true, // table name same as model name
        timestamps: true
    });
};