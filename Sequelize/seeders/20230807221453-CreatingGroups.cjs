'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Groups', [
                 { name: "Group1", amount: "$500", interval: "monthly", end_date: "11/12/24" },
                 { name: "Group2", amount: "$100", interval: "weekly", end_date: "12/11/23" }
              ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Group', null, {});
  }
};