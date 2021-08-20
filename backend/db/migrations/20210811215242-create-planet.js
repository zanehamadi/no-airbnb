'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Planets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        unique: true,
        type: Sequelize.STRING(100)
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
      },
      solar_system_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Solar_Systems'}
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      imgUrl: {
        type: Sequelize.STRING(600),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Planets');
  }
};
