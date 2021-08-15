'use strict';
module.exports = (sequelize, DataTypes) => {
  const Solar_System = sequelize.define('Solar_System', {
    name: DataTypes.STRING
  }, {});
  Solar_System.associate = function(models) {
    // associations can be defined here
    Solar_System.hasMany(models.Planet, {foreignKey: 'solar_system_id'})
  };
  return Solar_System;
};