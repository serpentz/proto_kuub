import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class User extends Model {
  static associate(models){
    let {Group, GroupUsers, Payment, Profile} = models
    
    User.belongsToMany(Group, {through: GroupUsers, as: 'groups'})
    User.hasMany(Payment, {as: 'payments'})
    User.hasOne(Profile, {as: 'profile', foreignKey: "UserId"})
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Username address already in use!",
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: {
        args: true,
        msg: "Email address already in use!",
      },
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

User.associations = function(models){
  let {Group, GroupUsers} = models
  
  User.hasMany(Group, {through: GroupUsers, uniqueKey: 'user_id', as: 'groups' })
}

export { User };
