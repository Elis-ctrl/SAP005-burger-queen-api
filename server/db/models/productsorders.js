'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {

    static associate(models) {
      ProductsOrders.belongsTo(models.Orders, {
      foreignKey: "orderId", onDelete:"CASCADE" });

      ProductsOrders.belongsTo(models.Products, {
        foreignKey: "productId", onDelete:"CASCADE" })
    }
  };
  ProductsOrders.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};
