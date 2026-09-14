require("dotenv").config();

const config = {
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// Prefer the complete Aiven Service URI
if (process.env.MYSQL_URL) {
  config.use_env_variable = "MYSQL_URL";
  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
} else {
  // Fallback to individual environment variables
  config.host = process.env.MYSQLHOST;
  config.username = process.env.MYSQLUSER;
  config.password = process.env.MYSQLPASSWORD;
  config.database = process.env.MYSQLDATABASE;
  config.port = Number(process.env.MYSQLPORT);

  config.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

module.exports = config;
