require('dotenv/config');

console.log(process.env.USER);

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      user: process.env.USERDB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: "__tests__/database.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: process.env.HOST,
      user: process.env.USERDB,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
