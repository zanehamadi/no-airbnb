'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Planets', [
        {
          name:'Jupiter',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1
        },
        {
          name: 'Venus',
          user_id: 4,
          solar_system_id: 1,
          temperature: 5
        },
        {
          name: 'Neptune',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1
        },
        {
          name: 'Mars',
          user_id: 4,
          solar_system_id: 1,
          temperature: 2
        },
        {
          name: 'Saturn',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1,
        },
        {
          name: 'Uranus',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1
        },
        {
          name: 'Mercury',
          user_id: 4,
          solar_system_id: 1,
          temperature: 4
        },
        {
          name: 'Proxima Centauri B',
          user_id: 5,
          solar_system_id: 2,
          temperature: 2
        },
        {
          name: 'Proxima Centauri C',
          user_id: 5,
          solar_system_id: 2,
          temperature: 8 
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Planets', null, {truncate: true, cascade: true, restartIdentity: true});
    }
  }

