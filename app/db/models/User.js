'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
      unique: true,
    },
    email: DataTypes.STRING,
    password : DataTypes.STRING,
    createdAt: { 
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: { 
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};