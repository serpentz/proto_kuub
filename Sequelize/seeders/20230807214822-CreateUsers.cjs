'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users', [{ firstName: "alex", lastName: "jones",username: "alexjones", email: "alexjones@gmail.com", password: "password" },
                { firstName: "jones", lastName: "alex",username: "jonesalex", email: "jonesalex@gmail.com", password: "password2" }
               ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
