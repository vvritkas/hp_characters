const mysql = require("mysql2/promise");

const config = {
  host: "127.0.0.1",
  user: "root",
  database: "node_course",
  password: "",
};

async function connection() {
  return await mysql.createConnection(config);
}

function Hello_Hugo() {
  return "Hello Hugo! How are you?";
}

exports.connection = connection;
exports.introduction = Hello_Hugo;
