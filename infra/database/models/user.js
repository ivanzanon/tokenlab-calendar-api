'use strict';

const { Model, DataTypes } = require("Sequelize");
const sequelize = require('./index');

class User extends Model{};

User.init({
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    }, {sequelize, modelName:"User"});

User.associate = function(models) {
  User.hasMany(models.Event, {
    foreignKey: 'idUser',
    as: 'events',
    onDelete: 'CASCADE',
  });
};

User.sync();

module.exports = User;