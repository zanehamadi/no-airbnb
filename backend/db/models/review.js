'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    user_id: DataTypes.INTEGER,
    planet_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'user_id'})
    Review.belongsTo(models.Planet, {foreignKey: 'planet_id'})
  };
  return Review;
};