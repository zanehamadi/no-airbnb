'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Solar_Systems',[
      {
        name: 'Solar'
      },
      {
        name: 'Proxima Centauri'
      },
      {
        name: 'Midreon'
      },
      {
        name: 'Elia'
      },
      {
        name: 'Inevis'
      },
      {
        name: 'Zugantu'
      },
      {
        name: 'Lobupra'
      },
      {
        name: 'Georia'
      },
      {
        name: 'Agonerth'
      },
      {
        name: 'Hod'
      }
    ], {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Solar_Systems', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
