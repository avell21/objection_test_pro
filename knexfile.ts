module.exports = {
  development: {
    client: "postgres",
    connection: {
      user: "AV",
      host: "0.0.0.0",
      password: "Password",
      database: "test"
    }
  },
  staging: {
    client: "postgres",
    connection: {
      database: "testing2",
      user: "AV",
      password: "Password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgres",
    connection: {
      database: "testing2",
      user: "AV",
      password: "Password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
    }
  }
};
