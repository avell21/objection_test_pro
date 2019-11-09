const { Model } = require("objection");
const Knex = require("knex");
const connection = require("../../../knexfile");
const env = process.env.NODE_ENV || "development";
const knexConnection = Knex(connection[env]);
Model.knex(knexConnection);

export class User extends Model {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],
      properties: {
        id: { type: "integer" },
        parentId: { type: ["integer", "null"] },
        firstName: { type: "string", minLength: 10, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}
