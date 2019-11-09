import { importSchema } from "graphql-import";
import user from "./user/user.resolvers";
import { User } from "./user/userModel";
import blog from "./blog/blog.resolvers";
import { Blog } from "./blog/blogModel";

const model = {
  User,
  Blog
};
const resolvers = {
  Query: {
    ...user.Query,
    ...blog.Query
  },
  Mutation: {
    ...user.Mutation,
    ...blog.Mutation
  },
  User: {}
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

export default {
  typeDefs,
  resolvers,
  context: {
    model
  }
};
