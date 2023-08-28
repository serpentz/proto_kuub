import path from "path";
import { fileURLToPath } from "url";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";

const filenames = ["user", "group"];
let typeDefs = [];

const __dirname = path.dirname(fileURLToPath(import.meta.url));

for (let file of filenames) {
  let filename = file + ".graphql";
  typeDefs.push(
    loadSchemaSync(path.join(__dirname, filename), {
      loaders: [new GraphQLFileLoader()],
    })
  );
}

export default mergeTypeDefs(typeDefs);
