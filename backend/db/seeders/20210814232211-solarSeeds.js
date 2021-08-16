'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Solar_Systems',[
      {
        name: 'Solar System'
      },
      {
        name: 'Proxima Centauri'
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Solar_Systems', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
