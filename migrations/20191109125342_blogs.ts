import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return Promise.all([
    knex.schema.createTable("blogs", table => {
      table.increments("id").primary();
      table.integer("userId").references("users.id");
      table.string("blog");
    })
  ]);
}

export async function down(knex: Knex): Promise<any> {
  return Promise.all([knex.schema.dropTable("blogs")]);
}
