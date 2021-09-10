'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Products', [{
        firstName: 'Daffa 1',
        lastName: 'test',
        email: 'admin@admin.com',
        password: 'admin',
        createdAt: '2021-09-10T13:56:50.386Z',
        updatedAt: '2021-09-10T13:56:50.386Z'
      },
      {
      firstName: 'Daffa 2',
      lastName: 'test',
      email: 'admin@admin.com',
      password: 'admin',
      createdAt: '2021-09-10T13:56:50.386Z',
      updatedAt: '2021-09-10T13:56:50.386Z'
      },
      {
        firstName: 'Daffa 3',
        lastName: 'test',
        email: 'admin@admin.com',
        password: 'admin',
        createdAt: '2021-09-10T13:56:50.386Z',
        updatedAt: '2021-09-10T13:56:50.386Z'
      }
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
