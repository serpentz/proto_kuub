"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Payments",
      [
        { UserId: 1, GroupId: 1, amount: "200.00", currency: "USD($)", privacy: "public" },
        { UserId: 2, GroupId: 2, amount: "50.00", currency: "USD($)", privacy: "public" },
        { UserId: 1, GroupId: 2, amount: "50.00", currency: "USD($)", privacy: "public" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Payments", {}, null);
  },
};
