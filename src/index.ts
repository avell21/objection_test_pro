// import express and init it

import express = require("express");
import { ApolloServer } from "apollo-server-express";
import api from "./api";
import { Model } from "objection";
import Knex from "knex";
const connection = require("../knexfile");
const env = process.env.NODE_ENV || "development";
const knexConnection = Knex(connection[env]);
Model.knex(knexConnection);

const app: express.Application = express();

const server = new ApolloServer(api);

server.applyMiddleware({ app, path: "/graphql" });

// app.get("/", async (req: express.Request, res: express.Response) => {
//   const ideas = await User.query();
//   res.json(ideas);
// });

app.listen(3000, () => {
  console.log("the server is running");
});
