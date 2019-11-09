import { Model } from "objection";
import { Broker } from "../broker/brokerModel";
const guid = require("objection-guid")();

// Import the plugin.
// const unique = require('objection-unique')({
//   fields: ['email', 'phoneNumber'],
//   identifiers: ['id']
// });

export class Application extends guid(Model) {
  static get tableName() {
    return "applications";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "broker"],
      properties: {
        email: { type: "string", minLength: 1, maxLength: 255 },
        broker: { type: "uuid" }
      }
    };
  }
  static get relationMappings() {
    return {
      brokers: {
        relation: Model.BelongsToOneRelation,
        modelClass: Broker,
        join: {
          from: "applications.broker",
          to: "brokers.id"
        }
      }
    };
  }
}
