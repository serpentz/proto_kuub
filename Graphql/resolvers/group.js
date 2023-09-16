import { GroupAPI } from "../../Sequelize/api/index.js";

export default {
  Query: {
    groups: async function () {
      return await GroupAPI.getGroups();
    },
    findGroup: async function (_, { id }, context, info) {
      let group;

      group = await GroupAPI.findGroup(id);

      if (!group) {
        return {
          __typename: "ServerError",
          status: "Error",
          code: "404",
          message: "Cannot find group associated with given parameters.",
        }
      }

      return {
        __typename: "ServerSuccess",
        group,
        status: "Success",
        code: "200",
      };
    },
  },
  Mutation: {
    createGroup: async function (_, { group }, context, info) {
      const { user } = context;

      if (!user) {
        return {
          __typename: "ServerError",
          status: "Error",
          code: "403",
          message:
            "You Must be logged in to create a group. Try again with a token(OAuth)",
        };
      }
      return await GroupAPI.createGroup({ ...group, OwnerId: user.id });
    },
  },
};
