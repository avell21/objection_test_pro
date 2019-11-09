import { importSchema } from "graphql-import";
import { Admin } from "./admin/adminModel";
import admin from "./admin/admin.resolvers";
import { Broker } from "./broker/brokerModel";
import broker from "./broker/broker.resolvers";
import { Application } from "./application/applicationModel";
import application from "./application/application.resolvers";

const model = {
  Admin,
  Broker,
  Application
};
const resolvers = {
  Query: {
    ...admin.Query,
    ...broker.Query,
    ...application.Query
  },
  Mutation: {
    ...admin.Mutation,
    ...broker.Mutation,
    ...application.Mutation
  }
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

export default {
  typeDefs,
  resolvers,
  context: {
    model
  }
};
