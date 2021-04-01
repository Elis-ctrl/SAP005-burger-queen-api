"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {

    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: "userId"
      });
      Orders.belongsToMany(models.Products, {through: "ProductsOrders",
      foreignKey: "orderId"})
    }
  }

  Orders.init({
    userId: DataTypes.INTEGER,
    clientname: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Orders",
  });
  return Orders;
};