'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Bookings', [{
        startDate: new Date(2031, 0 , 15),
        endDate: new Date(2055, 0, 15),
        user_id: 2,
        planet_id: 8,
      }], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Bookings', null, {truncate: true, cascade: true, restartIdentity: true});
  }
};
