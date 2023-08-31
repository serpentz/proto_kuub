import { mergeTypeDefs } from "@graphql-tools/merge";
import groupType from "./groupType.js";
import userType from "./userType.js";
import paymentType from "./paymentType.js";

let typeDefs = [groupType, userType, paymentType];

export default mergeTypeDefs(typeDefs);
