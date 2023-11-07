const { faker } = require("@faker-js/faker");
const _ = require("lodash");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const {encrypt} = await import("../Auth/index.js");
    console.log(encrypt)
    let users = [];
    let profiles = [];
    _.range(0, 20).forEach((index) => {
      users.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: encrypt("testing"),
      });
      profiles.push({
        UserId: index+1,
        bio: faker.lorem.sentence(),
        picture: faker.image.avatar(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    });
    await queryInterface.bulkInsert("Users", users, {});
    await queryInterface.bulkInsert("Profiles", profiles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Profiles", null, {});
  },
};
