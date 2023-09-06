const { faker } = require("@faker-js/faker");
const _ = require("lodash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];
    _.range(0, 10).forEach(() => {

      let interval = ["daily", "weekly", "monthly"];

      data.push({
        name: faker.company.buzzVerb(),
        amount: faker.number.int({ min: 10, max: 5000 }),
        interval: interval[Math.floor(Math.random() * 3)],
        endDate: faker.date.future(),
        OwnerId: Math.floor(Math.random() * 5)+1,
      });
    });

    await queryInterface.bulkInsert("Groups", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Group", null, {});
  },
};
