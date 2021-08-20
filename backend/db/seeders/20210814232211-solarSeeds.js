'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Solar_Systems',[
      {
        name: 'Solar System'
      },
      {
        name: 'Proxima Centauri'
      },
      {
        name: 'Midreon System'
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
      }
    ], {})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Solar_Systems', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
