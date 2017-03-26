const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost:4433/iotawin', {
  logging: false
});
module.exports = db;
