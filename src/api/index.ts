import { importSchema } from "graphql-import";
import user from "./user/user.resolvers";
import { User } from "./user/userModel";

const resolvers = {
  Query: {
    ...user.Query
  },
  Mutation: {
    ...user.Mutation
  },
  User: {}
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

export default {
  typeDefs,
  resolvers,
  context: {
    User
  }
};
