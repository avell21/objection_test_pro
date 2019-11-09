import { Model } from "objection";
import { Application } from "../application/applicationModel";
const guid = require("objection-guid")();

// Import the plugin.
const unique = require("objection-unique")({
  fields: ["email", "phoneNumber"],
  identifiers: ["id"]
});

export class Broker extends unique(guid(Model)) {
  static get tableName() {
    return "brokers";
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
  static get relationMappings() {
    return {
      applications: {
        relation: Model.HasManyRelation,
        modelClass: Application,
        join: {
          from: "brokers.id",
          to: "applications.broker"
        }
      }
    };
  }
}
