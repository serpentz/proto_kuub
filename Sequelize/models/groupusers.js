import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class GroupUsers extends Model {}

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
  },
  {
    sequelize,
    modelName: "GroupUsers",
  }
);

export { GroupUsers };
