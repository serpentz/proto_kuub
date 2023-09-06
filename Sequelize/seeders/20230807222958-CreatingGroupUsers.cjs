const  { faker } = require("@faker-js/faker");
const _ =  require("lodash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];
    let roles = ["admin", "member", "communicator"]

    _.range(0, 50).forEach(() => {
      data.push({
        UserId: Math.floor(Math.random() * 20) +1,
        GroupId: Math.floor(Math.random() * 10) +1,
        role: roles[Math.floor(Math.random() * 3)],
      });
    });

    await queryInterface.bulkInsert(
      "GroupUsers",
      data,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GroupUsers", {}, null);
  },
};
