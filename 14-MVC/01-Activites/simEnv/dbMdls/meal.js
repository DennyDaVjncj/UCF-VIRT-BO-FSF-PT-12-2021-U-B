const {Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');

class Dish extends Model{}

Dish.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        dishName:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        description:{
            type:DataTypes.TEXT,
            allowNull:true,
        },
        guestName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        hasNuts:{
            type:DataTypes.BOOLEAN,
        },
    },
    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'dish',
    }
)
module.exports=Dish;