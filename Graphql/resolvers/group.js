import { GroupAPI } from "../../Sequelize/api/index.js";


export default {
    Query: {
      groups: async function () {
        return await GroupAPI.getGroups();
      },
      findGroup: async function (_, { id }, context, info) {
        let group;
        group = await GroupAPI.getGroup(id);
  
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
  