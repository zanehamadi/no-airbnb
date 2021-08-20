'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'thrik@solar.com',
        username: 'Thrik',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'destroyerGox@galacticmail.com',
        username: 'Gox',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'gleeboshleeb@galacticmail.com',
        username: 'Gleebo',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: 'zorg1112@galacticmail.com',
        username: 'Zorg',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'blorgGflorg@galacticmail.com',
        username: 'Blorg',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'uvur@solar.com',
        username: "Uv'ur",
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'olkitsglorg@galacticmail.com',
        username: "Olkits",
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'buvullplorb@solar.com',
        username: 'buvull',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'zalorsL@galacticmail.com',
        username: 'zalors',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'khirgodsB@galacticmail.com',
        username: 'khirgods',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email:'bheemhoBleeb@solar.com',
        username:'bheemho',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'vurrins@solar.com',
        username:'Vurrins',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      },
      {
        email: 'ceebs@galacticmail.com',
        username: 'ceebs',
        hashedPassword: bcrypt.hashSync(faker.internet.password())
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};