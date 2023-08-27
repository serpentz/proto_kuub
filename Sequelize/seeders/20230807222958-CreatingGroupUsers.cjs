'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert('GroupUsers', [{ user_id: 1, group_id: 1 }, { user_id: 2, group_id: 2 }, { user_id: 1, group_id: 2 }], {})
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('GroupUsers', {}, null)
  }
};
