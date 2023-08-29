import { UsersDataPromise } from "../datasources.js";

export default {
  Query: {
    users: async function () {
      return await UsersDataPromise();
    },
  },
};
