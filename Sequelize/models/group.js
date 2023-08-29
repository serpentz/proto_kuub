import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize} from "../connection.js";

class Group extends Model {
  static associate(models){
    let {User, GroupUsers} = models
    
    Group.belongsToMany(User, {through: GroupUsers, as: 'members' })
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
  },
  {
    sequelize,
    modelName: "Group",
  }
);

/** associations  */


Group.associations = function(models){
  let {User, GroupUsers} = models
  console.log(User)
  
  Group.hasMany(User, {through: GroupUsers, as: 'members' })
}

export {Group}
