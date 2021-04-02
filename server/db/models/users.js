"use strict";
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {

      Users.hasMany(models.Orders, {
        foreignKey: "id"
      })

    }
  };
  Users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    restaurant: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Users",
  });

  return Users;
};