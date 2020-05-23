'use strict';

const { Model, DataTypes } = require("Sequelize");
const sequelize = require('./index');

class User extends Model{};

User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {sequelize, modelName:"User"});

User.associate = function(models) {
  User.hasMany(models.Event, {
    foreignKey: 'idUser',
    as: 'events',
    onDelete: 'CASCADE',
  });
};

module.exports = User;