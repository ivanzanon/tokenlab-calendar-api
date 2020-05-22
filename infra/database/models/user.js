'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'events',
      onDelete: 'CASCADE',
    });
  };
  return User;
};