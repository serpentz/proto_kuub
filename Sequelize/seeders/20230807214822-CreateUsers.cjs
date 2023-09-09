const { faker } = require("@faker-js/faker");
const _ = require("lodash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const {encrypt} = await import("../Auth/index.js");
    console.log(encrypt)
    let data = [];
    _.range(0, 20).forEach(() => {
      data.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: encrypt("testing"),
      });
    });
    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
