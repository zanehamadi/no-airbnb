'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [
        {
        startDate: '2021-08-18 04:00:00.000 +00:00',
        endDate: '2021-08-18 04:00:00.000 +00:00',
        user_id: 1,
        planet_id: 3,
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
