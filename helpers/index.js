import { readFileSync } from "fs";
import path from "path";

function getTypeDefs(filename) {
  return gql(
    readFileSync(path.join(process.cwd(), "resources", filename), "utf8")
  );
}

export { getTypeDefs };
