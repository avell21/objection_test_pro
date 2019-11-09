import { Model } from "objection";
const guid = require("objection-guid")();

// Import the plugin.
const unique = require("objection-unique")({
  fields: ["email", "phoneNumber"],
  identifiers: ["id"]
});

export class Admin extends unique(guid(Model)) {
  static get tableName() {
    return "admins";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "phoneNumber", "firstName", "lastName", "avatar"],
      properties: {
        email: { type: "string", minLength: 1, maxLength: 255 },
        phoneNumber: { type: "string", minLength: 1, maxLength: 255 },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        avatar: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}
