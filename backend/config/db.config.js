require("dotenv").config();

module.exports = {
  HOST: process.env.MYSQLHOST,
  USER: process.env.MYSQLUSER,
  PASSWORD: process.env.MYSQLPASSWORD,
  DB: process.env.MYSQLDATABASE,
  port: Number(process.env.MYSQLPORT),

  dialect: "mysql",

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
