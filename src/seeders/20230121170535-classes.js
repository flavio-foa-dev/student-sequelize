'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classes',
    [
      {
        date_start: '2020-02-01',
        docent_id: 5,
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-03-01',
        docent_id: 10,
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-04-01',
        docent_id: 7,
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-05-01',
        docent_id: 7,
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-02-01',
        docent_id: 8,
        level_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-08-01',
        docent_id: 3,
        level_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date_start: '2020-07-01',
        docent_id: 9,
        level_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});

  }
};
