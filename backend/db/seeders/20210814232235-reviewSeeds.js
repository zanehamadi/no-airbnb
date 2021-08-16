'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews',[
      {
        user_id: 2,
        planet_id: 9,
        description: 'Was a tad hot for my taste.',
        rating: 3
      },
      {
        user_id: 2,
        planet_id: 4,
        description: 'Was an amazing temperature, would rent again!',
        rating: 5

      },
      {
        user_id: 3,
        planet_id: 8,
        description: 'Loved loved loved this place! I absolutely die for the cold!',
        rating: 5
      },
      {
        user_id: 4,
        planet_id: 8,
        description: 'Man that place sucked! Not nearly as good as ANY planets(besides Earth) in the Solar System!',
        rating: 1
      },
      {
        user_id: 5,
        planet_id: 3,
        description: 'That was the worst! I would SO rather go to any planets in the Proxima Centauri System!',
        rating: 1
      }
    ])

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
