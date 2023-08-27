import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class GroupUsers extends Model {}

GroupUsers.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    group_id: { type: DataTypes.INTEGER, allowNull: false },
  },
  {
    sequelize,
    modelName: "GroupUsers",
  }
);

export { GroupUsers };
