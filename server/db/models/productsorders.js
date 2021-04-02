'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {

    static associate(models) {
    
      models.Products.belongsToMany(models.Orders, {
        through: "ProductsOrders",
        foreignKey: "product_id", 
        onDelete:"CASCADE"
      }),
  
        models.Orders.belongsToMany(models.Products, {
          through: "ProductsOrders",
          foreignKey: "order_id", 
          onDelete:"CASCADE"
      })
    }
  };
  ProductsOrders.init({
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};