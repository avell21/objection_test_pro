import { Model } from "objection";
import { Blog } from "../blog/blogModel";
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
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
  static get relationMappings() {
    return {
      blog: {
        relation: Model.HasManyRelation,
        modelClass: Blog,
        join: {
          from: "users.id",
          to: "blogs.userId"
        }
      }
    };
  }
}
