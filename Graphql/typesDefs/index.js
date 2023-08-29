import { mergeTypeDefs } from "@graphql-tools/merge";
import groupType from "./groupType.js";
import userType from "./userType.js";

let typeDefs = [groupType, userType];

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// for (let file of filenames) {
//   let filename = file + ".graphql";
//   typeDefs[file] = loadSchemaSync(path.join(__dirname, filename), {
//     loaders: [new GraphQLFileLoader()],
//   });
// }

export default mergeTypeDefs(typeDefs);
