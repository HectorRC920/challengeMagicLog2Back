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
      this.belongsTo(models.Role, {
        foreignKey: 'roleId',
        as: 'role',
      })
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
    roleId: {
      type: DataTypes.BIGINT.UNSIGNED,
      field: 'role_id',
      references: {
        model: 'roles',
        key: 'id',
      }
    },
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
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};