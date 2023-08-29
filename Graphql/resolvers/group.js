import { GroupsDataPromise, FindGroupPromise } from "../datasources.js";


export default {
    Query: {
      groups: async function () {
        return await GroupsDataPromise();
      },
      findGroup: async function (_, { id }, context, info) {
        let group;
        group = await FindGroupPromise(id);
  
        if (group) {
          return {
            __typename: "ServerSuccess",
            group,
            status: "Success",
            code: "200",
          };
        }
  
        return {
          __typename: "ServerError",
          status: "Error",
          code: "404",
          message: "Cannot find group associated with given parameters.",
        };
      },
    },
  };
  