'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GroupUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.bulkDelete('GroupUsers', null, {});
  }
};