'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas',
    [
      {
        status: 'success',
        estudante_id: 1,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'success',
        estudante_id: 2,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelado',
        estudante_id: 3,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'cancelado',
        estudante_id: 4,
        class_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'success',
        estudante_id: 5,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'success',
        estudante_id: 6,
        class_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {});
  }
};
