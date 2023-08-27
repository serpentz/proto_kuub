'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users', [{ first_name: "alex", last_name: "jones",username: "alexjones", email: "alexjones@gmail.com", password: "password" },
                { first_name: "jones", last_name: "alex",username: "jonesalex", email: "jonesalex@gmail.com", password: "password2" }
               ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
