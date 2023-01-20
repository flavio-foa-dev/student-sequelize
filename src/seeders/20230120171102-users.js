'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Jhon Doe',
        email: 'jhon@google.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Renata Brito',
        email: 'renata@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Erick Andrade',
        email: '1erick@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lidia Oliveira',
        email: 'lidia@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Celio Freire',
        email: 'celio@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cileia Andrade',
        email: 'cileia@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Jubior Nabarro',
        email: 'junior@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Joa da Silva',
        email: 'joao@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Marina de Oliveira',
        email: 'marina@google.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Maria da Silva',
        email: 'maria@gmail.com',
        active: true,
        role: 'user',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Flavio Oliveira',
        email: 'flavio@gmail.com',
        active: true,
        role: 'admin',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
