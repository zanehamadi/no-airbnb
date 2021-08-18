'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [{
        startDate: new Date(2021, 7 , 20),
        endDate: new Date(2021, 8, 3),
        user_id: 2,
        planet_id: 8,
      }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
