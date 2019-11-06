import knex from "knex";

const postgres = knex({
  client: "postgres",
  connection: {
    user: "AV",
    host: "localhost",
    password: "Password",
    database: "postgres"
  }
});
[
  postgres.raw("DROP DATABASE IF EXISTS testing1"),
  // postgres.raw('DROP USER IF EXISTS av'),
  // postgres.raw('CREATE USER objection SUPERUSER'),
  postgres.raw("CREATE DATABASE testing2")
]
  .reduce((promise, query) => {
    return promise.then(() => query);
  }, Promise.resolve())
  .then(() => {
    return Promise.all([postgres.destroy()]);
  })
  .catch(e => {
    return console.log(e);
  });
