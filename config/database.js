require("dotenv").config();

module.exports = {
  development: {
    //username: process.env.USERNAME,
    username: "postgres",
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
};
