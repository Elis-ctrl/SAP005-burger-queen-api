'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {

    static associate(models) {
      Products.belongsToMany(models.Orders, {through: "ProductsOrders",
      foreignKey: "productId", onDelete: "CASCADE"})
    }
  };
  Products.init({
    name: DataTypes.STRING,
    flavor: DataTypes.STRING,
    complement: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING,
    type: DataTypes.STRING,
    subType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};
