'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      amount: {
        allowNull: false,
        type: Sequelize.STRING
      },
      interval: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      endDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      OwnerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Users", 
          key: "id",
        },
      },
      privacy: {
        allowNull: true,
        type: Sequelize.STRING,
        defaultValue: "public"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toISOString()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date().toISOString()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Groups', null, {});
  }
};