'use strict';
const ROLES = require('../../consts/ROLES');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.User, {
          foreignKey: 'roleId',
          as: 'users',
        })
    }
  }
  Role.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT.UNSIGNED,
      unique: true,
    },
    name: {
      //create a type of enum with values: admin, user, guest
      type : DataTypes.ENUM(ROLES.admin, ROLES.customer, ROLES.seller),
      unique: true,
      defaultValue: ROLES.customer,
    },
  }, {
    sequelize,
    modelName: 'Role',
    tableName: 'roles',
  });
  return Role;
};