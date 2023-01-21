'use strict';

const { type } = require('os');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_start: {
        type: Sequelize.DATEONLY
      },
      docent_id:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users', key: 'id'}
      },
      level_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Levels', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};