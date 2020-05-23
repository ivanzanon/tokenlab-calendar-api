'use strict';
const { Model, DataTypes } = require("Sequelize");
const sequelize = require('./index');

class Event extends Model {};
Event.init({
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: DataTypes.STRING,
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {sequelize, modelName:"Event"});

  module.exports = Event;