"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const vehicle = require("./vehicle.model.js");
const car = require("./car.model.js");
const Collection = require('./collections');
require("dotenv").config();

const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DATABASE_URI;

  
  
  const sequelize = new Sequelize(POSTGRES_URI);
  
  console.log('sequelize', sequelize.options.dialect);
  console.log('Car', car);
  
  
  const vehicleModel = vehicle(sequelize, DataTypes)
  const vehicleCollection = new Collection(vehicleModel);



module.exports = {
  dbInstance: sequelize,
  Car: car(sequelize, DataTypes),
  vehicleCollection
};
