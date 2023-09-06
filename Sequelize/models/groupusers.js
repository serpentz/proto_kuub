import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class GroupUsers extends Model {
  static associate(models) {}
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
      defaultValue: "member",
    },
  },
  {
    sequelize,
    modelName: "GroupUsers",
    validate: {
      userAlreadyInGroup() {
        console.log(sequelize.models)
        let groupUser = sequelize.models.GroupUsers.findOne({where: {UserId: this.UserId, GroupId: this.GroupId }});
        if (groupUser) {
          throw new Error("User already in group!");
        }
      }
    },
  }
);

export { GroupUsers };
