'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    planet_id: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: 'user_id' })
    Booking.belongsTo(models.User, {foreignKey: 'planet_id'})
  };
  return Booking;
};