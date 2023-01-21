'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels',
    [
      {
        desc_level: 'Inicial',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'Intermediario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        desc_level: 'avancado',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});

  }
};
