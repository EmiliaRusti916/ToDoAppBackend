const {Client} = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'emilia23',
  port: 5432,
});

module.exports = client