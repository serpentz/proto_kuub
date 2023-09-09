import { Model, DataTypes } from "sequelize";
import { sequelize_connection as sequelize } from "../connection.js";

class Payment extends Model {
  static associate(models) {
    const {User, Group} = models;

    Payment.belongsTo(User, {foreignKey: "UserId"})
    Payment.belongsTo(Group, {foreignKey: "GroupId"})
  }
}
Payment.init(
  {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    privacy: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "public",
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0.00",
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "USD($)",
    },
  },
  {
    sequelize,
    modelName: "Payment",
  }
);

export { Payment };
