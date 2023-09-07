import dotenv from "dotenv";
import express, { json } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import typeDefs from "./Graphql/typesDefs/index.js";
import resolvers from "./Graphql/resolvers/index.js";
import { getUser } from "./Sequelize/Auth/index.js";
import { sequelize_connection } from "./Sequelize/connection.js";
import tester from "./tester.js";
import { GraphQLError } from "graphql";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

const corsConfig = {
  credentials: true,
  allowedHeaders: ["Authorization"],
  exposedHeaders: ["Authorization"],
};

// app.use(cors());
app.use(express.json());

try {
  await sequelize_connection.authenticate();
  await tester(sequelize_connection);
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// const authenticate = async ({ req }) => {
//   // get the user token from the headers
//   const token = req.headers.authorization || '';

//   // try to retrieve a user with the token
//   const user = getUser(token);

//   // optionally block the user
//   // we could also check user roles/permissions here
//   if (!user)
//     // throwing a `GraphQLError` here allows us to specify an HTTP status code,
//     // standard `Error`s will have a 500 status code by default
//     throw new GraphQLError('User is not authenticated', {
//       extensions: {
//         code: 'UNAUTHENTICATED',
//         http: { status: 401 },
//       },
//     });

//   // add the user to the context
//   return { user };
// }

const server = new ApolloServer({
  typeDefs,
  resolvers
});

await server.start();

app.use(
  "/graphql",
  cors(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      const token = req.headers.token || "";

      const user = await getUser(token);
      
      if (!user) {
        console.log("No user in Context, no token passed in");
        throw new GraphQLError("User is not authenticated", {
          extensions: {
            code: "UNAUTHENTICATED",
            http: { status: 401 },
          },
        });
      }

      return { user };
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
