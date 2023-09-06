const  { faker } = require("@faker-js/faker");
const _ =  require("lodash");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [];
    _.range(0, 20).forEach(() => {
      data.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      });
    });
    await queryInterface.bulkInsert(
      "Users",
      data,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("User", null, {});
  },
};
