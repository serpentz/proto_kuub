import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./Graphql/typesDefs/index.js";
import resolvers from "./Graphql/resolvers/index.js";
import { sequelize_connection } from "./Sequelize/connection.js";
import tester from "./tester.js"

//sequelize connection testing
try {
  await sequelize_connection.authenticate();
  // console.log(await db.Group.findByPk(1, { include: db.User, raw: true }));
  await tester(sequelize_connection)
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
