import  groupResolver  from "./group.js";
import  userResolver  from "./user.js";
import  paymentResolver from "./payment.js"
import { mergeResolvers } from '@graphql-tools/merge'


let resolvers =  [ groupResolver, userResolver,paymentResolver ];

export default mergeResolvers(resolvers)
