module.exports = function(sequelize, DataTypes) {
    
    return sequelize.define('votes', {
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
        answer_id: {
            allowNull: false,
            field: 'answer_id',
            type: DataTypes.UUID
        }
    }, {
        freezeTableName: true, // table name same as model name
        timestamps: true
    });
};