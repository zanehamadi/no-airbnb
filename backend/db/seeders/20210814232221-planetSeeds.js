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
        },
        {
          name: 'Dilliuzuno',
          user_id: 2,
          solar_system_id: 3,
          temperature: 3
        },
        {
          name: 'Manathea',
          user_id: 2,
          solar_system_id: 3,
          temperature: 4
        },
        {
          name: 'Bosie H4D',
          user_id: 2,
          solar_system_id: 3,
          temperature: 9
        },
        {
          name: 'Vetera',
          user_id: 3,
          solar_system_id: 3,
          temperature: 10
        },
        {
          name: 'Stroth XG08',
          user_id: 3,
          solar_system_id: 3,
          temperature: 1
        },
        {
          name: 'Strovinia',
          user_id: 6,
          solar_system_id: 4,
          temperature: 3
        },
        {
          name: 'Groria 2IH5',
          user_id: 6,
          solar_system_id: 4,
          temperature: 3
        },
        {
          name: 'Verth DF2',
          user_id: 6,
          solar_system_id: 4,
          temperature: 6
        },
        {
          name: 'Rialia',
          user_id: 6,
          solar_system_id: 4,
          temperature: 8
        },
        {
          name:'Vepamia',
          user_id: 7,
          solar_system_id: 5,
          temperature: 7
        },
        {
          name: 'Marth 907N',
          user_id: 7,
          solar_system_id: 5,
          temperature: 4
        },
        {
          name: 'Lumapra',
          user_id: 7,
          solar_system_id: 5,
          temperature: 2
        },
        {
          name: 'Uchoria',
          user_id: 7,
          solar_system_id: 5,
          temperature: 8
        },
        {
          name: 'Cov J855',
          user_id: 8,
          solar_system_id: 6,
          temperature: 9
        },
        {
          name: 'Drapus NE',
          user_id: 8,
          solar_system_id: 6,
          temperature: 3
        },
        {
          name: 'Yolmippe',
          user_id: 8,
          solar_system_id: 6,
          temperature: 4
        },
        {
          name: 'Zore VU1',
          user_id: 8,
          solar_system_id: 6,
          temperature: 1
        },
        {
          name: 'Chiri 277',
          user_id: 8,
          solar_system_id: 6,
          temperature: 4
        },
        {
          name: 'Drigerilia',
          user_id: 9,
          solar_system_id: 7,
          temperature: 7
        },
        {
          name: 'Bruchabos',
          user_id: 9,
          solar_system_id: 7,
          temperature: 8
        },
        {
          name: 'Villes 32RE',
          user_id: 9,
          solar_system_id: 7,
          temperature: 7
        },
        {
          name: 'Gerus',
          user_id: 9,
          solar_system_id: 7,
          temperature: 9
        },
        {
          name: 'Zion L2Y',
          user_id: 9,
          solar_system_id: 7,
          temperature: 10
        },
        {
          name: 'Aogantu',
          user_id: 10,
          solar_system_id: 8,
          temperature: 3
        },
        {
          name: 'Drillon 126',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2
        },
        {
          name: 'Gnupinia',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2
        },
        {
          name: 'Strora UM5',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1
        },
        {
          name: 'Dilluter',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2
        },
        {
          name: 'Narvis AQ',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1
        },
        {
          name: 'Rasiuq',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1
        },
        {
          name: 'Grexotera',
          user_id: 11,
          solar_system_id: 9,
          temperature: 3
        },
        {
          name: 'Nalatune',
          user_id: 11,
          solar_system_id: 9,
          temperature: 4
        },
        {
          name: 'Zexatov',
          user_id: 11,
          solar_system_id: 9,
          temperature: 3
        },
        {
          name: 'Zuarus',
          user_id: 11,
          solar_system_id: 9,
          temperature: 2
        }
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Planets', null, {truncate: true, cascade: true, restartIdentity: true});
    }
  }

