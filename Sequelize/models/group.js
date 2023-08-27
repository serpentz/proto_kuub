import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize} from "../connection.js";

class Group extends Model {}

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
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Group",
  }
);

export {Group}
