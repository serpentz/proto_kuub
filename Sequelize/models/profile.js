import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class Profile extends Model {
  static associate(models) {
    const { User } = models;
    Profile.belongsTo(User, {as: 'user', foreignKey: "UserId"})
  }
}
Profile.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Profile",
  }
);
export { Profile };
