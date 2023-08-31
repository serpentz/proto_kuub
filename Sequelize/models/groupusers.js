import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class GroupUsers extends Model {
  static associate(models){
   

  }
}

GroupUsers.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "member"
    }
  },
  {
    sequelize,
    modelName: "GroupUsers",
  }
);

export { GroupUsers };
