require("@babel/register");

const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "./../.env" });

const dbConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./migrations",
    table: "migrations",
    stub: "./stubs/migration.stub",
  },
  seed: {
    directory: "./seeds",
  },
};

module.exports = dbConfig;
