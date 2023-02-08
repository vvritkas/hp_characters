const mysql = require('mysql2/promise')

const options = {
  host: 'localhost',
  user: 'root',
  database: 'node_course',
  password: ''
}

async function connection() {
return await mysql.createConnection(options);
}

exports.connection = connection;