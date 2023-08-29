'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('GroupUsers', [{ UserId: 1, GroupId: 1 }, { UserId: 2, GroupId: 2 }, { UserId: 1, GroupId: 2 }], {})
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('GroupUsers', {}, null)
  }
};
