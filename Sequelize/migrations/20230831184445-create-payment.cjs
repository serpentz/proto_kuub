"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      GroupId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Groups",
          key: "id",
        },
      },
      amount: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "0.00",
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "USD($)",
      },
      privacy: {
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue: "public",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toISOString(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toISOString(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Payments");
  },
};
