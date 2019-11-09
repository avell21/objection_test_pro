import { Model } from "objection";
import { User } from "../user/userModel";
export class Blog extends Model {
  static get tableName() {
    return "blogs";
  }

  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "blog"],
      properties: {
        id: { type: "integer" },
        userId: { type: "integer" },
        blog: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "blogs.userId",
          to: "users.id"
        }
      }
    };
  }
}
