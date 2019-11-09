import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable("applications", table => {
      table.uuid("id").primary();
      table.uuid("broker").references("brokers.id");
      table.string("email");
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable("applications")]);
}
