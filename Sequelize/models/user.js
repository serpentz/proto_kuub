'use strict';
const { Model } = require('sequelize');
import Group from './group';

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(Group, {through: models.GroupUsers, uniqueKey: 'group_id'})
    }
  }
  User.init({
    first_name: {
      type: DataTypes.STRING, allowNull: false
    },
    last_name: {
      type: DataTypes.STRING, allowNull: false
    },
    username: {
      type: DataTypes.STRING, allowNull: false,
      unique: {
        args: true,
        msg: 'Username address already in use!'
      }
    },
    password: {
      type: DataTypes.STRING, allowNull: false
    },
    email: {
      type: DataTypes.STRING, allowNull: false, validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};