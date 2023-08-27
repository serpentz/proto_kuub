import { GroupsData, UsersDataPromise, groups, users } from "./datasources.js";

export default {
  Query: {
    async users() {
      return await UsersDataPromise;
    },
    groups() {
      return groups;
    },
    findGroup(_, {id}, context, info) {
      let group = groups.find((group) => group.id == id);

      if (group) {
        return {
          __typename: "ServerSuccess",
          group: {...group},
          status: "Success",
          code: "@TODO",
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
