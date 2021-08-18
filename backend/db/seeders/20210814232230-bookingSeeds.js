'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [{
        startDate: 'Thu Sep 16 2021 00:00:00 GMT-0400 (Eastern Daylight Time)',
        endDate: 'Thu Sep 23 2021 23:59:59 GMT-0400 (Eastern Daylight Time)',
        user_id: 2,
        planet_id: 8,
      }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {truncate: true, cascade: true, restartIdentity: true});

  }
};
