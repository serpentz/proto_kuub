import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class Group extends Model {
  static associate(models) {
    let { User, GroupUsers, Payment } = models;

    Group.belongsToMany(User, { through: GroupUsers, as: "members" });
    Group.hasMany(Payment, {as: 'payments'});
    Group.belongsTo(User, {as: 'owner', foreignKey: "OwnerId"})
  }
}

Group.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interval: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    OwnerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: "Users", 
        key: "id",
      },
    },
    privacy: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "public"
    },
  },
  {
    sequelize,
    modelName: "Group",
  }
);

/** associations  */

// Group.associations = function(models){
//   let {User, GroupUsers} = models

//   Group.hasMany(User, {through: GroupUsers, as: 'members' })
// }

export { Group };
