import  groupResolver  from "./group.js";
import  userResolver  from "./user.js";
import { mergeResolvers } from '@graphql-tools/merge'


let resolvers =  [ groupResolver, userResolver ];

export default mergeResolvers(resolvers)
