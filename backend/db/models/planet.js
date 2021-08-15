'use strict';
module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define('Planet', {
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    solar_system_id: DataTypes.INTEGER,
    temperature: DataTypes.STRING
  }, {});
  Planet.associate = function(models) {
    // associations can be defined here
    Planet.hasMany(models.Booking, {foreignKey: 'planet_id'})
    Planet.hasMany(models.Review, {foreignKey: 'planet_id'})
    Planet.belongsTo(model.User, {foreignKey: 'user_id'})
    Planet.belongsTo(model.Solar_System, {foreignKey: 'solar_system_id'})
  };
  return Planet;
};