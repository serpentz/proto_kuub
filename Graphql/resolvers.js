import { users, groups } from "./datasources.js";

export default {
  Query: {
    users() {
      return users;
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
        message: "Cannot find group assosiated with given parameters.",
      };
    },
  },
};
