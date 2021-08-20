'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Planets', [
        {
          name:'Jupiter',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/DEFqkuh.png'
        },
        {
          name: 'Venus',
          user_id: 4,
          solar_system_id: 1,
          temperature: 5,
          imgUrl: 'https://i.imgur.com/XCU2W2e.png'
        },
        {
          name: 'Neptune',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/NAzMPQT.png'
        },
        {
          name: 'Mars',
          user_id: 4,
          solar_system_id: 1,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/YCaWe87.png'
        },
        {
          name: 'Saturn',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/31Zola7.png',
        },
        {
          name: 'Uranus',
          user_id: 4,
          solar_system_id: 1,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/i3hZfj4.png'
        },
        {
          name: 'Mercury',
          user_id: 4,
          solar_system_id: 1,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/jwYOHq8.png'
        },
        {
          name: 'Proxima Centauri B',
          user_id: 5,
          solar_system_id: 2,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/Phj8ohe.png'
        },
        {
          name: 'Proxima Centauri C',
          user_id: 5,
          solar_system_id: 2,
          temperature: 8,
          imgUrl: 'https://i.imgur.com/61OW2gN.png' 
        },
        {
          name: 'Dilliuzuno',
          user_id: 2,
          solar_system_id: 3,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/e5NavhU.png'
        },
        {
          name: 'Manathea',
          user_id: 2,
          solar_system_id: 3,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/wpicFiH.png'
        },
        {
          name: 'Bosie H4D',
          user_id: 2,
          solar_system_id: 3,
          temperature: 9,
          imgUrl: 'https://i.imgur.com/fnewsgs.png'
        },
        {
          name: 'Vetera',
          user_id: 3,
          solar_system_id: 3,
          temperature: 10,
          imgUrl: 'https://i.imgur.com/XS29OSp.png'
        },
        {
          name: 'Stroth XG08',
          user_id: 3,
          solar_system_id: 3,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/7ZjzdE8.png'
        },
        {
          name: 'Strovinia',
          user_id: 6,
          solar_system_id: 4,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/ubTZN7v.png'
        },
        {
          name: 'Groria 2IH5',
          user_id: 6,
          solar_system_id: 4,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/Lenuur9.png'
        },
        {
          name: 'Verth DF2',
          user_id: 6,
          solar_system_id: 4,
          temperature: 6,
          imgUrl: 'https://i.imgur.com/MMc6TAc.png'
        },
        {
          name: 'Rialia',
          user_id: 6,
          solar_system_id: 4,
          temperature: 8,
          imgUrl: 'https://i.imgur.com/pYhBSKb.png'
        },
        {
          name:'Vepamia',
          user_id: 7,
          solar_system_id: 5,
          temperature: 7,
          imgUrl: 'https://i.imgur.com/JljMyge.png'
        },
        {
          name: 'Marth 907N',
          user_id: 7,
          solar_system_id: 5,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/Bzs9gyQ.png'
        },
        {
          name: 'Lumapra',
          user_id: 7,
          solar_system_id: 5,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/wWPp7Rp.png'
        },
        {
          name: 'Uchoria',
          user_id: 7,
          solar_system_id: 5,
          temperature: 8,
          imgUrl: 'https://i.imgur.com/wEPteqa.png'
        },
        {
          name: 'Cov J855',
          user_id: 8,
          solar_system_id: 6,
          temperature: 9,
          imgUrl: 'https://i.imgur.com/muHZqy9.png'
        },
        {
          name: 'Drapus NE',
          user_id: 8,
          solar_system_id: 6,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/VuJG5qA.png'
        },
        {
          name: 'Yolmippe',
          user_id: 8,
          solar_system_id: 6,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/9kZT7IB.png'
        },
        {
          name: 'Zore VU1',
          user_id: 8,
          solar_system_id: 6,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/xW3xttc.png'
        },
        {
          name: 'Chiri 277',
          user_id: 8,
          solar_system_id: 6,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/q1Kzw14.png'
        },
        {
          name: 'Drigerilia',
          user_id: 9,
          solar_system_id: 7,
          temperature: 7,
          imgUrl: 'https://i.imgur.com/xWdJGCK.png'
        },
        {
          name: 'Bruchabos',
          user_id: 9,
          solar_system_id: 7,
          temperature: 8,
          imgUrl: 'https://i.imgur.com/hS5I4NA.png'
        },
        {
          name: 'Villes 32RE',
          user_id: 9,
          solar_system_id: 7,
          temperature: 7,
          imgUrl: 'https://i.imgur.com/wVXhnhJ.png'
        },
        {
          name: 'Gerus',
          user_id: 9,
          solar_system_id: 7,
          temperature: 9,
          imgUrl: 'https://i.imgur.com/E6TGKlT.png'
        },
        {
          name: 'Zion L2Y',
          user_id: 9,
          solar_system_id: 7,
          temperature: 10,
          imgUrl: 'https://i.imgur.com/2KUE1uz.png'
        },
        {
          name: 'Aogantu',
          user_id: 10,
          solar_system_id: 8,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/kTPiS31.jpeg'
        },
        {
          name: 'Drillon 126',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/iNascFK.png'
        },
        {
          name: 'Gnupinia',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/varMq2W.png'
        },
        {
          name: 'Strora UM5',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/q9r7LvM.png'
        },
        {
          name: 'Dilluter',
          user_id: 10,
          solar_system_id: 8,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/xqUe7LG.png'
        },
        {
          name: 'Narvis AQ',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/4J6EC0f.png'
        },
        {
          name: 'Rasiuq',
          user_id: 10,
          solar_system_id: 8,
          temperature: 1,
          imgUrl: 'https://i.imgur.com/Gkmk9WP.png'
        },
        {
          name: 'Grexotera',
          user_id: 11,
          solar_system_id: 9,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/1wuWVkB.png'
        },
        {
          name: 'Nalatune',
          user_id: 11,
          solar_system_id: 9,
          temperature: 4,
          imgUrl: 'https://i.imgur.com/0VFkZPd.png'
        },
        {
          name: 'Zexatov',
          user_id: 11,
          solar_system_id: 9,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/bYaHlQd.png'
        },
        {
          name: 'Zuarus',
          user_id: 11,
          solar_system_id: 9,
          temperature: 2,
          imgUrl: 'https://i.imgur.com/rbdteSx.png'
        },
        {
          name: 'Flora',
          user_id: 13,
          solar_system_id: 10,
          temperature: 3,
          imgUrl: 'https://i.imgur.com/wgL9D61.png'
        }
      

    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Planets', null, {truncate: true, cascade: true, restartIdentity: true});
    }
  }

