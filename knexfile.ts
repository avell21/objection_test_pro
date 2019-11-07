// Update with your config settings.

module.exports = {
  development: {
    client: "postgres",
    connection: {
      database: "test",
      user: "AV",
      password: "Password"
    },
    migrations: {
      extension: "ts",
      tableName: "knex_migrations"
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
