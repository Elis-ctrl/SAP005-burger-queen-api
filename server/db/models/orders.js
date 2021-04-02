"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate(models) {
      
      Orders.belongsToMany(models.Products, {
        through: "ProductsOrders",
        foreignKey: "order_id", 
        onDelete:"CASCADE"
      }),
      Orders.belongsTo(models.Users, {
        foreignKey: "user_id"
      })
  }
};
  Orders.init({
    user_id: DataTypes.INTEGER,
    clientName: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Orders",
  });
  return Orders;
};